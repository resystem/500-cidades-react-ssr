import { client } from '../../../libs/apollo.lib'
import { getBase64, sendImageToApi } from '../../../utils/media.util';
import { createImageMutation, editActivistMutation, editAddressMutation, updateImageMutation } from './editActivist.mutations';

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
  lat: +(address.lat),
  lng: +(address.lng),
});

const editImage = async (profileImage, imageId) => {
  const base64 = await getBase64(profileImage.file);
  const image = await sendImageToApi({ base64: base64 });
  
  
  const updatedImage = await client().mutate({
    mutation: updateImageMutation,
    variables: {
      image: {
        id: imageId,
        name: 'profile_image',
        single_size: image.data.urls,
      },
    }
  });

  return updatedImage.data.updateImage;
}

const createImage = async (profileImage) => {
  const base64 = await getBase64(profileImage.file);
  const image = await sendImageToApi({ base64: base64 });
  
  
  const createdImage = await client().mutate({
    mutation: createImageMutation,
    variables: {
      image: {
        name: 'profile_image',
        single_size: image.data.urls,
      },
    }
  });

  return createdImage.data.createImage;
}

const updateAddress = async (activist, user) => {
  try {
    const updatedAddress = await client().mutate({
      mutation: editAddressMutation,
      variables: {
        address: mapAddress(activist, user.address.id),
      }
    });
    return updatedAddress.data.updateAddress;
  } catch(err) {
    console.log([err])
  }
};

const updateActivist = async (activist, user, address, image) => {
  try {
    const mappedActivist = mapActivist(activist, address.id, user.ida, user.id)

    if (image) mappedActivist.profile_image = image.id;
    const editActivist = await client().mutate({
      mutation: editActivistMutation,
      variables: {
        user: mappedActivist,
      }
    });
    return editActivist.data.updateUser
  } catch(err) {
    console.log([err])
  }
};

export const handleSubmit = async (
  activist, ida, user, setUser, closeModal, setActivists, activists, setLoading,
) => {
  console.log('🚀 ~ activist', activist);
  setLoading(true);
  let image;
  try {
    if (activist.profileImage?.file) {
      if (user.profile_image?.single_size) {
        image = await editImage(activist.profileImage, user.profile_image.id);
      } else {
        image = await createImage(activist.profileImage);
      }
    }
 
    const updatedAddress = await updateAddress(activist, user);
    const updatedActivist = await updateActivist(activist, user, updatedAddress, image);

    setUser(updatedActivist);
    closeModal();
    const newActivists = activists.map(a => (a.ida === user.ida ? updatedActivist : a));
    setActivists(newActivists);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
}