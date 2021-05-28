import { client } from '../../../libs/apollo.lib'
import { gql } from 'apollo-boost';

const createActivistMutation = gql`
  mutation createUser(
    $user: UserInput
  ){
    createUser(
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
      address {
        id
        state
        city
        country
        street
        number
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

const createAddressMutation = gql`
  mutation createAddress(
    $address: AddressInput
  ){
    createAddress(
      address: $address
    ) {
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
`;

const mapActivist = (activist, addressId, ida) => ({
  ida,
  name: activist.name,
  social_name: activist.socialName,
  email: activist.email,
  biography: activist.biography,
  whatsapp: activist.whatsapp,
  facebook: activist.facebook,
  instagram: activist.instagram,
  twitter: activist.twitter,
  tiktok: activist.tiktok,
  address: addressId || null,
  // job: String,
  // interests: [String],
  // phone: String,
  // gender: String,
  // sexual_orientation: String,
  // color_race: String,
  // deficiency: String,
  // web_site: String,
  // qualification: String,
  // languages: [String],
  // hobbies: String,
  // books: String,
  // music: String,
  // food: String,
  // movies: String,
  // series: String,
  // dream: String,
  // favorite_places: String,
  // places_wanna_visit: String,
  // how_collaborate: String,
  // sign: String,
});

const mapAddress = (address) => ({
  state: address.state,
  city: address.city,
  country: address.country,
  street: address.street,
  number: address.number,
  district: address.district,
  zipcode: address.zipcode,
  geolocation: address.geometry,
  lat: address.lat,
  lng: address.lng,
});

export const handleSubmit = async (activist, ida, setUser, closeModal, activists, setActivists) => {
  try {
    
    const createdAddress = await client().mutate({
      mutation: createAddressMutation,
      variables: {
        address: mapAddress(activist),
      }
    });
    
    const createdActivist = await client().mutate({
      mutation: createActivistMutation,
      variables: {
        user: mapActivist(activist, createdAddress.data.createAddress.id, ida),
      }
    });

    setUser(createdActivist.data.createUser);
    closeModal();
    setActivists([...activists, createdActivist.data.createUser])
  } catch(err) {
    console.log('🚀 ~ err', [err]);
  }
}