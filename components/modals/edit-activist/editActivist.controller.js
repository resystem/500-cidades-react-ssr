import { client } from '../../../libs/apollo.lib'
import { gql } from 'apollo-boost';

const editActivistMutation = gql`
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

const editAddressMutation = gql`
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

const mapActivist = (activist, addressId, ida, activistId) => ({
  id: activistId,
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

const mapAddress = (address, id) => ({
  id,
  state: address.state,
  city: address.city,
  country: address.country,
  street: address.street,
  number: address.number,
  district: address.district,
  zipcode: address.zipcode,
  complement: address.complement,
  geolocation: address.geometry,
  lat: address.lat,
  lng: address.lng,
});

export const handleSubmit = async (activist, ida, user, setUser, closeModal) => {
  try {

    const updatedAddress = await client().mutate({
      mutation: editAddressMutation,
      variables: {
        address: mapAddress(activist, user.address.id),
      }
    });

    const editActivist = await client().mutate({
      mutation: editActivistMutation,
      variables: {
        user: mapActivist(activist, updatedAddress.data.updateAddress.id, ida, user.id),
      }
    });

    setUser(editActivist.data.updateUser);
    closeModal();
  } catch(err) {
    console.log('🚀 ~ err', [err]);
  }
}