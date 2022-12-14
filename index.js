const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }
  type Mutation {
    groupCreate(
      GroupInput: GroupInput!
    )
    groupUpdateCars(
      groupId: ID!
      GroupInput: GroupInput!
    ): groupUpdatePayload
    groupDelete(groupId: ID!) 
    groupPublish(groupId: ID!)
    groupPunpublish(groupId: ID!)
    groupAddCars(groupId: ID!, carID: ID!)
    groupRemoveCars(groupId: ID!, carID: ID!)
  }


  type groupUpdatePayload{
    userErrors: [UserErrors!]!
    group: Group
  }
  type UserErrors{
    message: String!
    field: [String!]!
  }

  inpur GroupInput{
      name: String
      image: ImageInput
      description: String
      featureSet: GroupFeatureFields
  }

  input ImageInput{
    url: String!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group{
    id: ID!
    featureSet: GroupFeatureSet
    hasCar(id: ID!): Boolean!
    cars(skip: Int!,take: Int!): [Car!]!
    name: String!
    image: Image! 
    description: String!
  }

  type Image{
    id: ID
    url: String!

  }

  type GroupFeatureSet{
    features: [GroupFeatures!]!
    applyFeaturesSeparately: Boolean!
  }

  type GroupFeatures{
    feature: GroupFeatureFields!
  }

  enum GroupFeatureFields {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLUNDER_ENGINE
    RED_PAINT
    BLACK_PAINT
  }

`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});