import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAIL,
} from "../constants/ActionTypes";

const initialState = {
  plan: {
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
        plan: {
          isLoading: true,
          error: null,
          data: null,
        },
      };
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        plan: {
          isLoading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_PLANETS_FAIL:
      return {
        ...state,
        plan: {
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
