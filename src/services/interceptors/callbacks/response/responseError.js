import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../../../constants';

const responseError = async (error) => {
  const {
    status,
    data
  } = error?.response;

  if (status === 401 && data?.error?.extensions?.challenge === 'Bearer') {
    await AsyncStorage.removeItem(constants.asyncStorageUserKey);
    return Promise.reject(error);
  }
  if (status === 500) {
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

export default responseError;
