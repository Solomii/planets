import {
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_ALL_DATA_FAIL,
  GET_ALL_PLANETS_REQUEST,
  GET_ALL_PLANETS_SUCCESS,
  GET_ALL_PLANETS_FAIL,
  GET_ONE_PLANET_REQUEST,
  GET_ONE_PLANET_SUCCESS,
  GET_ONE_PLANET_FAIL,
} from "../constants/ActionTypes";

const initialState = {
  planet: {
    isLoading: null,
    error: null,
    data: null,
  },

  alldata: {
    isLoading: null,
    error: null,
    data: null,
  },

  onePlanet: {
    isLoading: null,
    error: null,
    data: null,
  },
};

const planets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLANETS_REQUEST:
      return {
        ...state,
        planet: {
          isLoading: true,
          error: null,
          data: null,
        },
      };
    case GET_ALL_PLANETS_SUCCESS:
      return {
        ...state,
        planet: {
          isLoading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_ALL_PLANETS_FAIL:
      return {
        ...state,
        planet: {
          isLoading: false,
          error: action.payload,
          data: false,
        },
      };
    case GET_ALL_DATA_REQUEST:
      return {
        ...state,
        alldata: {
          isLoading: true,
          error: null,
          data: null,
        },
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        alldata: {
          isLoading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_ALL_DATA_FAIL:
      return {
        ...state,
        alldata: {
          isLoading: false,
          error: action.payload,
          data: false,
        },
      };
    case GET_ONE_PLANET_REQUEST:
      return {
        ...state,
        onePlanet: {
          isLoading: true,
          error: null,
          data: null,
        },
      };
    case GET_ONE_PLANET_SUCCESS:
      return {
        ...state,
        onePlanet: {
          isLoading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_ONE_PLANET_FAIL:
      return {
        ...state,
        onePlanet: {
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
