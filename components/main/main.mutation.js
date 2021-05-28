import gql from "graphql-tag";

export const oneActivistQuery = gql`
  mutation createActivist(
    $activist: ActivistInput
  ){
    createActivist(
      activist: $activist
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