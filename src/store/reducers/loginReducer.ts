import { loginActionTypes } from "../actions/loginActions";

interface Props {
  email: string;
  password: string;
  token: string;
  isLogged: boolean;
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  email: '',
  password: '',
  token: '',
  isLogged: false
}

export default (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case loginActionTypes.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case loginActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case loginActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        token: action.payload,
      };
    case loginActionTypes.CHANGE_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case loginActionTypes.RESET:
      return {
        ...state,
        email: '',
        password: '',
        token: '',
        isLogged: false
      }
    default:
      return state;
  }
};