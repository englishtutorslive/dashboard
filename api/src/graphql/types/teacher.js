const { GraphQLObjectType } = require("graphql");
const { PersonType } = require("../interfaces");

const TeacherType = new GraphQLObjectType({
  name: "Teacher",
  description: "Teacher type definition",
  interfaces: [PersonType]
});

module.exports = { TeacherType };
