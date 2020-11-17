import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAIL,
} from "../constants/ActionTypes";

import { getPlanets } from "../api/planets";

const getPlanet = async (dispatch) => {
  dispatch({ type: GET_PLANETS_REQUEST });

  try {
    const response = await getPlanets();
    const res = await response.json();
    dispatch({ type: GET_PLANETS_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_PLANETS_FAIL, payload: e });
  }
};

export const getPlanetFunc = (dispatch) => {
  return () => getPlanet(dispatch);
};
