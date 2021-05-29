import { gql } from 'apollo-boost';

export const editActivistMutation = gql`
  mutation updateUser(
    $user: UserInput
  ){
    updateUser(
      user: $user
    ) {
      id
      ida
      name
      social_name
      profile_image {
        id
        single_size {
          mimified
        }
      }
      email
      job
      biography
      interests
      phone
      address {
        id
        state
        city
        country
        street
        number
        complement
        geolocation
        lat
        lng
        district
        zipcode
        geolocation
      }
      hometown
      gender
      sexual_orientation
      color_race
      deficiency
      facebook
      instagram
      twitter
      tiktok
      web_site
      whatsapp
      qualification
      languages
      hobbies
      books
      music
      food
      movies
      series
      dream
      favorite_places
      places_wanna_visit
      how_collaborate
      sign
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
