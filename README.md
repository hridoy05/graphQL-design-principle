## graphQL-design-principle 

### Rule-1
- Always start with  a high level view of the objects and their relationships before you deal with specific field

### Rule-2
- Never expose implementation details in api design

### Rule-3
- Design your API around your business domain

### Rule-4
- It's easier to add fields than to remove them

### Rule-5
- Group closely related fields together into subjects

### Rule-6
- Always check if a list field should be paginated

### Rule-7
- Always use object references insteas of ID fields

### Rule-8 
- Choose field names based on what makes sense, not based on the implementation

### Rule-9
- Use enums for fields which can only take a specific set of values

### Rule-10
- Your API should provide business logic, not just data

### Rule-11
- Write separate mutation for separate logical actions on a resource

### Rule-12

- For a relationship mutation, always consider whether it would be useful to operate on multiple elements at once

### Rule-13

- Prefix mutation names with the object they are mutating for alphabetical grouping 

### Rule-14

- Structure mutations inputs to reduce duplication, even if this requires relaxing requiredness constriants on certain fields


### Rule -15

- Mutations should provide user/business level errors via a userErrors field on the mutation payload