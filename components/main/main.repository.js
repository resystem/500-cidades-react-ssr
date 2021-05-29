import { client } from '../../libs/apollo.lib';
import { oneUserQuery, allUsersQuery } from './main.query';

export const getUser = (ida) => client().query({
  query: oneUserQuery,
  variables: {
    ida
  }
});

export const getAllUsers = () => client().mutate({
  mutation: allUsersQuery,
  variables: {
    user: {}
  }
});

export default getUser;
