import { gql } from 'apollo-boost';
import { userApolloSchema } from '../../../utils/user.util';

export const editActivistMutation = gql`
  mutation updateUser(
    $user: UserInput
  ){
    updateUser(
      user: $user
    ) {
      ${userApolloSchema}
    }
  }
`;

export const editAddressMutation = gql`
  mutation updateAddress(
    $address: AddressInput
  ){
    updateAddress(
      address: $address
    ) {
      id
      state
      city
      country
      street
      complement
      number
      district
      zipcode
      geolocation
      lat
      lng
    }
  }
`;

export const updateImageMutation = gql`
  mutation updateImage(
    $image: ImageInput
  ) {
    updateImage(
      image: $image
    ) {
      id
      name
      description
      single_size {
        mimified
        original
        thumbnail
      }
    }
  }
`;

export const createImageMutation = gql`
  mutation createImage(
    $image: ImageInput
  ) {
    createImage(
      image: $image
    ) {
      id
      name
      description
      single_size {
        mimified
        original
        thumbnail
      }
    }
  }
`;
