const { GraphQLInterfaceType, GraphQLString } = require("graphql");
const { CountryType } = require("../types");

const PersonType = new GraphQLInterfaceType({
  name: "Person",
  fields: {
    _id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    address: { type: GraphQLString },
    zip_code: { type: GraphQLString },
    country: { type: CountryType },
    email: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

module.exports = { PersonType };
