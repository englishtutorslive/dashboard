const { GraphQLObjectType } = require("graphql");
const { PersonType } = require("../interfaces");

const StudentType = new GraphQLObjectType({
  name: "Student",
  description: "Student type definition",
  interfaces: [PersonType]
});

module.exports = { StudentType };
