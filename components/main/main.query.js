import gql from "graphql-tag";
import { userApolloSchema } from "../../utils/user.util";

export const oneUserQuery = gql`
  query oneUser( 
    $id: String
    $ida: String
    $email: String
  ){
    oneUser( 
      id: $id
      ida: $ida
      email: $email
    ) {
      ${userApolloSchema}
    }
  }
`;

export const allUsersQuery = gql`
  query allUsers(
    $user: UserInput
  ){
    allUsers( 
      user: $user
    ) {
      ${userApolloSchema}
    }
  }
`;

export const allAssetsQuery = gql`
  query allAssets(
    $asset: AssetInput
  ){
    allAssets( 
      asset: $asset
    ) {
      id
      data
      type
    }
  }
`;