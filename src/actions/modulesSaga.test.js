/**
 * A few test for the saga generator
 */
import { fetchModule, fetchMdlApi } from "./insuranceSaga";
import { call, put } from "redux-saga/effects";
import { MODULE_FETCH_SUCCEEDED } from "./modules";

const actionObject = {
  id: 1
};

const iterator = fetchModule(actionObject);

test("should yield a fetch module effect", () => {
  expect(iterator.next().value).toEqual(call(fetchMdlApi, 1));
});

const module = {};

const response = {
  data: {
    module: {}
  }
};
test("should yield a put module succeeded effect ", () => {
  expect(iterator.next(response).value).toEqual(
    put({ type: MODULE_FETCH_SUCCEEDED, module: module })
  );
});
