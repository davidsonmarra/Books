import { loginActionTypes } from "../actions/loginActions";

interface Props {
  email: string;
  password: string;
  token: string;
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  email: '',
  password: '',
  token: ''
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
    default:
      return state;
  }
};