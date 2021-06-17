import { client } from '../../../libs/apollo.lib'
import { gql } from 'apollo-boost';
import { getBase64, sendImageToApi } from '../../../utils/media.util';
import { strToDateDDMMYYYY } from '../../../utils/date.util';
import { entitySchema } from '../../../utils/entity.util';

const createEntityMutation = gql`
  mutation createEntity(
    $entity: EntityInput
  ){
    createEntity(
      entity: $entity
    ) {
      ${entitySchema}
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

const mapOrganization = (organization, addressId, userId) => ({
  biografy: organization.biography,
  birth_date: strToDateDDMMYYYY(organization.birthDate),
  email: organization.email,
  facebook: organization.facebook,
  fields_interest: organization.fieldsInterest,
  how_to_collaborate: organization.howToCollaborate,
  instagram: organization.instagram,
  occupation: organization.occupation,
  phone: organization.phone,
  whatsapp: organization.whatsapp,
  has_address: organization.hasAddress,
  
  is_host_point: organization.isHostPoint,
  name: organization.name,
  tik_tok: organization.tiktok,
  twitter: organization.twitter,
  type: 'organization',
  category: organization.category,
  web_site: organization.website,
  owner: userId,
  address: addressId
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

export const handleSubmit = async (organization, userId, setUser, closeModal, activists, setActivists, setLoading) => {
console.log('🚀 ~ userId', userId);
console.log('🚀 ~ organization', organization);
  let createdImage;
  // setLoading(true);
  try {
    if (organization.profileImage.file) {
      console.log('🚀 ~ organization', organization);
      const base64 = await getBase64(organization.profileImage.file);
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
        address: mapAddress(organization),
      }
    });
  } catch (err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
  try {
    console.log('🚀 ~ createdAddress', createdAddress);
    const mappedOrganization = mapOrganization(organization, createdAddress.data.createAddress.id, userId)
    console.log('🚀 ~ mappedOrganization', mappedOrganization);
    console.log('🚀 ~ createdImage', createdImage);
    if (createdImage) mappedOrganization.profile_image = createdImage.data.createImage.id;
    
    const createdActivist = await client().mutate({
      mutation: createEntityMutation,
      variables: {
        entity: mappedOrganization,
      }
    });
    console.log('🚀 ~ createdActivist', createdActivist);

  //   setUser(createdActivist.data.createUser);
  //   setActivists([...activists, createdActivist.data.createUser]);
    closeModal();
    setLoading(false);
  } catch(err) {
    setLoading(false);
    console.log('🚀 ~ err', [err]);
  }
}