export const userApolloSchema = `
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
  birth_sign
  birth_date
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
`;
