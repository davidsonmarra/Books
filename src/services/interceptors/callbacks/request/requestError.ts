const callbackRequestError = (error: any) => {
  return Promise.reject(error);
};

export default callbackRequestError;
