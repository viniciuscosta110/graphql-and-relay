import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '../modules/user/userType';
import UserModel from '../modules/user/userModel';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return UserModel.findById(args.id);
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
});