import { client } from '../../../libs/apollo.lib'
import { gql } from 'apollo-boost';
import { getBase64, sendImageToApi } from '../../../utils/media.util';

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
        street
        number
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

const createImageMutation = gql`
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

const mapActivist = (activist, addressId, ida, profileImage) => ({
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
  job: activist.job,
  phone: activist.phone,
  hometown: activist.hometown,
  homestate: activist.homestate,
  homecountry: activist.homecountry,
  gender: activist.gender,
  sexual_orientation: activist.sexualOrientation,
  color_race: activist.colorRace,
  deficiency: activist.deficiency,
  web_site: activist.website,
  education: activist.education,
  how_to_collaborate: activist.howToCollaborate,
  places_wanna_visit: activist.placesWannaVisit,
  favorite_places: activist.favoritePlaces,
  dreams: activist.dreams,
  series: activist.series,
  movies: activist.movies,
  foods: activist.foods,
  songs: activist.songs,
  books: activist.books,
  languages: activist.languages,
  hobbies: activist.hobbies,
  address: addressId || null,
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

export const handleSubmit = async (activist, ida, setUser, closeModal, activists, setActivists, setLoading) => {
  let createdImage;
  setLoading(true);
  try {
    if (activist.profileImage.file) {
      const base64 = await getBase64(activist.profileImage.file);
      const profileImage = await sendImageToApi({ base64: base64 });
      createdImage = await client().mutate({
        mutation: createImageMutation,
        variables: {
          image: {
            name: 'profile_image',
            single_size: profileImage.data.urls,
          },
        }
      });
    }
  } catch (err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
  let createdAddress;
  try {
    createdAddress = await client().mutate({
      mutation: createAddressMutation,
      variables: {
        address: mapAddress(activist),
      }
    });
  } catch (err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
  try {
    const mappedActivist = mapActivist(activist, createdAddress.data.createAddress.id, ida)
    if (createdImage) mappedActivist.profile_image = createdImage.data.createImage.id;
    
    const createdActivist = await client().mutate({
      mutation: createActivistMutation,
      variables: {
        user: mappedActivist,
      }
    });

    setUser(createdActivist.data.createUser);
    closeModal();
    setActivists([...activists, createdActivist.data.createUser])
    setLoading(false);
  } catch(err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
}