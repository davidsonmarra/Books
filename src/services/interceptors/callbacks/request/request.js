import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../../../constants';

const callbackRequest = async (config) => {
  const configuration = config;
  const token = await AsyncStorage.getItem(constants.asyncStorageUserKey);
  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  return configuration;
};

export default callbackRequest;
