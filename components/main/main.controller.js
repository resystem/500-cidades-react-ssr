import { init } from '../../libs/ida.lib';
import { getUser, createUser } from './main.repository';

/**
 * this find user on S.O.M api by the ida and set in global state
 * @param {string} ida this is the ativist identifier to search on S.O.M api
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const fetchLoggedUser = async (ida, router) => {
 
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
        if (auth) {
          fetchLoggedUser(auth.ida, router);
        } else {
          setShowLoading(false);
        }

        // setta o usuário IDa na context API
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
