const { GraphQLObjectType, GraphQLString } = require("graphql");

const CountryType = new GraphQLObjectType({
  name: "Country",
  description: "Country type definition",
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    short_name: { type: GraphQLString },
    created_at: { type: GraphQLString }
  }
});

module.exports = { CountryType };
