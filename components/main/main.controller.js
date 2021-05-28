import { init } from '../../libs/ida.lib';
import { getUser, createUser, getAllUsers } from './main.repository';

/**
 * this find user on 500 cidades api by the ida and set in global state
 * @param {string} ida this is the ativist identifier to search on 500 cidades api
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const fetchLoggedUser = async (auth, openRegisterModal, setUser) => {
  const user = await getUser(auth.ida);
  if (!user.data.oneUser) openRegisterModal();
  else setUser(user.data.oneUser)
};

/**
 * this get all users in api
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const getActivists = async (setActivists) => {
  console.log('🚀 ~ setActivists');
  const users = await getAllUsers();
  console.log('🚀 ~ users', users);
  if (users.data.allUsers?.length) setActivists(users.data.allUsers);
  // if (!user.data.oneUser) openRegisterModal();
  // else setUser(user.data.oneUser)
};

/**
 * initilize ida auth listener, stop de verify authentication
 * loading
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const initIDA = async (setShowLoading, setAuth, setIdaSDK, router) => {
  let sdk;
  setShowLoading(true);
  try {
    sdk = await init({
      onAuthChange: (auth) => {
        setAuth(auth);
      }
    });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  // setta o sdk do IDa na context API
  setIdaSDK(sdk);
};
