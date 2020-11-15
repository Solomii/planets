import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAIL,
  GET_MORE_PLANETS_REQUEST,
  GET_MORE_PLANETS_SUCCESS,
  GET_MORE_PLANETS_FAIL,
} from "../constants/ActionTypes";

const initialState = {
  byId: {
    isLoading: null,
    error: null,
    data: null,
  },
  planets: {
    isLoading: null,
    error: null,
    data: null,
  },
};

const planets = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS_REQUEST:
      return {
        ...state,
        planets: {
          isLoading: true,
          error: null,
          data: null,
        },
      };
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_PLANETS_FAIL:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: action.payload,
          data: false,
        },
      };
    default:
      return state;
  }
};

export default planets;
