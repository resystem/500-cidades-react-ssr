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
      email
      biography
      whatsapp
      facebook
      instagram
      twitter
      tiktok
      job
      phone
      hometown
      homestate
      homecountry
      gender
      sexual_orientation

      color_race
      deficiency
      web_site
      qualification
      main_language
      sign
      education
      
      how_to_collaborate
      places_wanna_visit
      favorite_places
      dreams
      series
      movies
      foods
      songs
      books
      interests
      languages
      hobbies
      profile_image {
        id
        single_size {
          mimified
        }
      }
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
