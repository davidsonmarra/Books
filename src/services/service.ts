import axios from 'axios';
import callbackRequest from './interceptors/callbacks/request/request';
import callbackRequestError from './interceptors/callbacks/request/requestError';
import callbackResponseError from './interceptors/callbacks/response/responseError';

const createApiService = (
  baseURL: string,
  timeout: number,
  headers: any
) => {
  const api = axios.create({
    baseURL,
    timeout: timeout || 8000,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    }
  });

  // api.interceptors.request.use(
    // (config) => callbackRequest(config),
    // (error) => callbackRequestError(error)
  // );
  // api.interceptors.response.use(
  //   (response) => response,
  //   (error) => callbackResponseError(error)
  // );

  return api;
};

export default createApiService;