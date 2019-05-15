// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    uid
    email
    firstName
    lastName
    school
    jobTitle
    fieldsOfStudy
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      uid
      email
      firstName
      lastName
      school
      jobTitle
      fieldsOfStudy
    }
    nextToken
  }
}
`;
