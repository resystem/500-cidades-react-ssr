export const entitySchema = `
  id
  biography
  birth_date
  email
  occupation
  phone
  name

  fields_interest
  how_to_collaborate

  has_address
  is_host_point

  facebook
  instagram
  tik_tok
  twitter
  web_site

  type
  category

  owner {
    id
  }
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
