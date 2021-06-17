import { client } from '../../libs/apollo.lib';
import { oneUserQuery, allAssetsQuery, allUsersQuery, allEntitiesQuery } from './main.query';

export const getUser = (ida) => client().query({
  query: oneUserQuery,
  variables: {
    ida
  }
});

export const getAllUsers = (user) => client().query({
  query: allUsersQuery,
  variables: { user: user || {} }
});

export const getAllEntities = (entity) => client().query({
  query: allEntitiesQuery,
  variables: { entity: entity || {} }
});

export const getAllAssets = (variables) => client().query({
  query: allAssetsQuery,
  variables
});

export default getUser;
