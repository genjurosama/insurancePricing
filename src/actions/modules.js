/**
 * @flow
 * Simple action creators (pure functions)
 */
export const MODULE_FETCH_REQUESTED = 'MODULE_FETCH_REQUESTED';
export const MODULE_FETCH_SUCCEEDED = 'MODULE_FETCH_SUCCEEDED';
export const MODULE_FETCH_FAILED = 'MODULE_FETCH_FAILED';
export const MODULE_CHANGE_COVERAGE = 'MODULE_CHANGE_COVERAGE';
export const REQUEST_CALC_PRICE = 'REQUEST_CALC_PRICE';
export const REQUEST_CALC_SUCCESS = 'REQUEST_CALC_SUCCESS';
export const REQUEST_CALC_FAILURE = 'REQUEST_CALC_FAILLURE';

export const fetchModule = function(id) {
  return {
    type: MODULE_FETCH_REQUESTED,
    id: id
  };
};

export const fetchModuleSucceeded = function(module) {
  return {
    type: MODULE_FETCH_SUCCEEDED,
    module: module
  };
};

export const fetchModuleFailed = function(message) {
  return {
    type: MODULE_FETCH_FAILED,
    payload: message
  };
};


export const changeCoverage = function(value) {
  console.log('changing val:',value);
  return {
    type: MODULE_CHANGE_COVERAGE,
    value: value
  }
}

export const requestcalculatePrice = function(coverage, risk){
  return {
    type: REQUEST_CALC_PRICE,
    coverage: coverage,
    risk: risk
  }
}

export const calculatePriceSuccess = function(price){
  return {
    type: REQUEST_CALC_SUCCESS,
    price: price
  }
}

export const calculatePriceFailed = function(message){
  return {
    type: REQUEST_CALC_FAILURE,
    message: message
  }
}
