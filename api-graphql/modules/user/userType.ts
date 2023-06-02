import graphql, { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    cpf: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    birth_date: { type: new GraphQLNonNull(GraphQLString) },
    mother_name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLString },
  }
});

export default UserType;