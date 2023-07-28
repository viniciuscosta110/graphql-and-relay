// user mutation file
import { GraphQLObjectType, GraphQLString } from "graphql";
import UserType from "../userType";
import UserModel from "../userModel";

const UserMutation = new GraphQLObjectType({
  name: "UserMutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        birth_date: { type: GraphQLString },
        mother_name: { type: GraphQLString },
        phone: { type: GraphQLString },
        cpf: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = new UserModel({
          name: args.name,
          birth_date: args.birth_date,
          mother_name: args.mother_name,
          phone: args.phone,
          cpf: args.cpf,
        });
        return user.save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        birth_date: { type: GraphQLString },
        mother_name: { type: GraphQLString },
        phone: { type: GraphQLString },
        cpf: { type: GraphQLString },
      },
      resolve(parent, args) {
        return UserModel.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              birth_date: args.birth_date,
              mother_name: args.mother_name,
              phone: args.phone,
              cpf: args.cpf,
            },
          },
          { new: true }
        );
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return UserModel.findByIdAndDelete(args.id)
        .then(deletedUser => deletedUser)
        .catch(err => console.log(err));
      }
    }
  },
});

export default UserMutation;
