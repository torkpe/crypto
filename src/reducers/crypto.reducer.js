import * as cryptoActions from '../actions';

const initialState = {
  fetching: false,
  data: [],
  error: {},
};
export const cryptos = (state = initialState, action = {}) => {
  switch (action.type) {
    case cryptoActions.GET_ALL_CRYPTOS: {
      return {
        ...state,
        fetching: true,
      };
    }
    case cryptoActions.GET_ALL_CRYPTOS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        data: action.payload.data,
      };
    }
    case cryptoActions.GET_ALL_CRYPTOS_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    default: return state;
  }
};