import constants from '../constants';
import createApiService from './service';

const api = createApiService(
  'https://books.ioasys.com.br/api/v1',
  constants.timeout,
  {}
);

export default api;
