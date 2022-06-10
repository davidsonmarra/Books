import { createSlice } from '@reduxjs/toolkit';

interface Props {
  email: string;
  password: string;
  token: string;
  isLogged: boolean;
}

const initialState: Props = {
  email: '',
  password: '',
  token: '',
  isLogged: false,
};

const loginSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    LOGIN: state => ({ ...state }),
    CHANGE_EMAIL: (state, { payload }) => ({
      ...state,
        email: payload,
    }),
    CHANGE_PASSWORD: (state, { payload }) => ({
      ...state,
      password: payload
    }),
    CHANGE_TOKEN: (state, { payload }) => ({
      ...state,
      token: payload.token
    }),
    CHANGE_IS_LOGGED: (state, { payload }) => ({
      ...state,
      isLogged: payload
    }),
    RESET: (state) => ({
      ...state,
      email: '',
      password: '',
      token: '',
      isLogged: false,
    })
  }
});

const { actions, reducer } = loginSlice;

export const { 
  LOGIN, 
  CHANGE_EMAIL, 
  CHANGE_PASSWORD,
  CHANGE_TOKEN,
  CHANGE_IS_LOGGED,
  RESET
} = actions;
export default reducer;
