/**
 *This file will hold the tasks reducer to manage data fetching state
 */

import {
  MODULE_FETCH_FAILED,
  MODULE_FETCH_REQUESTED,
  MODULE_FETCH_SUCCEEDED,
  MODULE_CHANGE_COVERAGE,
  REQUEST_CALC_PRICE,
  REQUEST_CALC_FAILURE,
  REQUEST_CALC_SUCCESS
} from "../actions/modules";

const initialState = {
  module: {
    maxCoverage: 3000,
    minCoverage: 1000,
    coverage: 0
  }
};

/**
 * Reducer for tasks operations
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} as a new immutated state
 */

export const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODULE_FETCH_REQUESTED:
      return { ...state };
    case MODULE_FETCH_SUCCEEDED:
      return {
        ...state,
        module: action.module
      };
    case MODULE_FETCH_FAILED:
      return { ...state };
    case MODULE_CHANGE_COVERAGE:
      const coverage = Number(action.value);
      return {
        ...state,
        module: { ...state.module, coverage }
      };
    case REQUEST_CALC_PRICE:
      return { ...state };
    case REQUEST_CALC_SUCCESS:
      return { ...state, price: action.price };
    case REQUEST_CALC_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
