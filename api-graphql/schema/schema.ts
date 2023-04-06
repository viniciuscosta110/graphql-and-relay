import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '../modules/user/userType';
import UserModel from '../modules/user/userModel';
import UserMutation from '../modules/user/mutations/userMutations';

const UserQuery = new GraphQLObjectType({
  name: 'UserQueryType',
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
  query: UserQuery,
  mutation: UserMutation
});