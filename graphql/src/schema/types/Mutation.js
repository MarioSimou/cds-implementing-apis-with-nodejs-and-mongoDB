import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { Response } from "./union";
import mutation from "../../resolvers/Mutation";
import {
  createUserDataInput,
  queryUserInput,
  updateUserDataInput
} from "./input";
import transformVariables from '../../utils/middlewares/transformVariables'

export default new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: GraphQLNonNull(Response),
      resolve: mutation.createUser,
      args: {
        data: { type: GraphQLNonNull(createUserDataInput) }
      }
    },
    updateUser: {
      type: GraphQLNonNull(Response),
      resolve: transformVariables(mutation.updateUser),
      args: {
        query: { type: GraphQLNonNull(queryUserInput) },
        data: { type: GraphQLNonNull(updateUserDataInput) }
      }
    },
    deleteUser: {
      type: GraphQLNonNull(Response),
      resolve: transformVariables(mutation.deleteUser),
      args: {
        query: { type: GraphQLNonNull(queryUserInput) }
      }
    }
  }
});
