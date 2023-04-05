import graphql, { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    birth_date: { type: new GraphQLNonNull(GraphQLString) },
    mother_name: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLString },
  }
});

export default UserType;