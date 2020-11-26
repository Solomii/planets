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

import { getAllPlanets, getAllData, getPlanetDetails } from "../api/planets";

const getPlanet = async (dispatch) => {
  dispatch({ type: GET_ALL_PLANETS_REQUEST });

  try {
    const response = await getAllPlanets();
    const res = await response.json();
    dispatch({ type: GET_ALL_PLANETS_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_PLANETS_FAIL, payload: e });
  }
};

const getData = async (dispatch) => {
  dispatch({ type: GET_ALL_DATA_REQUEST });

  try {
    const response = await getAllData();
    const res = await response.json();
    dispatch({ type: GET_ALL_DATA_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_DATA_FAIL, payload: e });
  }
};

const getOnePlanet = async (id, dispatch) => {
  dispatch({ type: GET_ONE_PLANET_REQUEST });

  try {
    const response = await getPlanetDetails(id);
    const res = await response.json();
    dispatch({ type: GET_ONE_PLANET_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ONE_PLANET_FAIL, payload: e });
  }
};

export const getAllPlanetFunc = (dispatch) => {
  return () => getPlanet(dispatch);
};

export const getAllDataFunc = (dispatch) => {
  return () => getData(dispatch);
};

export const getOnePlanetFunc = (dispatch) => {
  return (id) => getOnePlanet(id, dispatch);
};
