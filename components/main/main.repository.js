import { client } from '../../libs/apollo.lib';
import { oneUserQuery, allAssetsQuery, allUsersQuery } from './main.query';

export const getUser = (ida) => client().query({
  query: oneUserQuery,
  variables: {
    ida
  }
});

export const getAllUsers = () => client().query({
  query: allUsersQuery,
  variables: {
    user: {}
  }
});

export const getAllAssets = (variables) => client().query({
  query: allAssetsQuery,
  variables
});

export default getUser;
