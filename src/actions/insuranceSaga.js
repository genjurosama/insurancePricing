/**
 * @flow
 * The main redux-sagas logic for Tasks CRUD operations
 */

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  MODULE_FETCH_SUCCEEDED,
  MODULE_FETCH_REQUESTED,
  MODULE_FETCH_FAILED,
  REQUEST_CALC_PRICE,
  REQUEST_CALC_FAILURE,
  REQUEST_CALC_SUCCESS
  
} from "./modules";


/**
 * will return a promise for tasks fetch
 */
export function fetchMdlApi(id): Promise {
  return axios.get(`http://localhost:9001/module/${id}`);
}

/**
 * send to backend for calculation
 */

 export function getCalculation(coverage, risk){
   console.log('sending:',coverage);
   return axios.post(`http://localhost:9001/calculatePrice`,{coverage, risk});
 }

/**
 * Generator function used by triggered by TASKS_FETCH_REQUESTED action type
 */

export function* fetchModule(action) {
  try {
    const response = yield call(fetchMdlApi,action.id);
    console.log('response:',response);
    yield put({ type: MODULE_FETCH_SUCCEEDED, module: response.data.module });
  } catch (e) {
    yield put({ type: MODULE_FETCH_FAILED, message: e.message });
  }
}

export function* calculatePrice(action) {
  try {
    console.log('action:',action);
    const response = yield call(getCalculation,action.coverage,action.risk);
    yield put({ type:  REQUEST_CALC_SUCCESS, price: response.data.price });
  } catch (e) {
    yield put({ type:  REQUEST_CALC_FAILURE, message: e.message });
  }
}


/**
 * will interscept ever action type dispatched by the store and fire the appropriate generator function
 */

function* mySaga() {
  yield takeEvery(MODULE_FETCH_REQUESTED, fetchModule);
  yield takeEvery(REQUEST_CALC_PRICE, calculatePrice);
}

export default mySaga;
