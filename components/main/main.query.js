import gql from "graphql-tag";

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
        complement
        street
        number
        district
        zipcode
        geolocation
        lat
        lng
      }
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
        single_size {
          mimified
        }
      }
      address {
        id
        state
        city
        country
        complement
        street
        number
        district
        zipcode
        geolocation
        lat
        lng
      }
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