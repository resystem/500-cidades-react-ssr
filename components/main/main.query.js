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
      job
      biography
      interests
      phone
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
      qualification
      languages
      hobbies
      books
      music
      food
      movies
      whatsapp
      series
      dream
      favorite_places
      places_wanna_visit
      how_collaborate
      sign
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
      job
      biography
      interests
      phone
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
      qualification
      languages
      hobbies
      books
      music
      food
      movies
      whatsapp
      series
      dream
      favorite_places
      places_wanna_visit
      how_collaborate
      sign
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