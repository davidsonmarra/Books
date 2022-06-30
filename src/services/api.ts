import createApiService from './service';
import constants from '../constants';

const api = createApiService('https://books.ioasys.com.br/api/v1', constants.timeout, {});

export default api;
