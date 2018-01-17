import React from "react";
import { Provider } from "react-redux";
import MockAdapter from "axios-mock-adapter";
import Enzyme, { mount, render } from "enzyme";
import Module from "../containers/module";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import Adapter from "enzyme-adapter-react-16";
import moduleSaga from "../actions/insuranceSaga";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { changeCoverage } from "../actions/modules";

Enzyme.configure({ adapter: new Adapter() });

describe("module fetch, change and calculate end to end Tests", () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const mock = new MockAdapter(axios);
  const initialState = {
    module: {
      maxCoverage: 3000,
      minCoverage: 1000,
      coverage: 0
    }
  };

  const module = {
    id: 1,
    name: "bike",
    minCoverage: 0,
    maxCoverage: 3000,
    risk: 0.3,
    coverage: 0
  };

  beforeAll(() => {
    jest.setTimeout(20000);
    jest.useRealTimers();
    mock.onGet("http://localhost:9001/module/1").reply(200, { module });
  });

  it("should fetch the Bike module from mocked endpoint and update smart component with the min and max", done => {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(moduleSaga);
    const wrapper = mount(
      <Provider store={store}>
        <Module currentModule="1" />
      </Provider>
    );
    setTimeout(() => {
      wrapper.update();
      try {
        console.log(wrapper.find("Module").props());
        expect(wrapper.find("Module").props().module.maxCoverage).toEqual(
          module.maxCoverage
        );
        expect(wrapper.find("Module").props().module.minCoverage).toEqual(
          module.minCoverage
        );
      } catch (e) {
        console.log(e);
        done.fail();
      }
      done();
    }, 2000);
    jest.runAllTimers();
  });

  it("it should change coverage and call endpoint for price calculation", done => {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(moduleSaga);
    const wrapper = mount(
      <Provider store={store}>
        <Module currentModule="1" />
      </Provider>
    );
    //We dispatch the change coverage action
    const coverage = 500;
    store.dispatch(changeCoverage(coverage));
    module.coverage = 500;

    //We mock calculation endpoint with our local Calculation
    mock
      .onPost("http://localhost:9001/calculatePrice")
      .reply(200, { price: module.coverage * module.risk });
    wrapper.find("#calculateBtn").simulate("click");
    setTimeout(() => {
      wrapper.update();
      try {
        const moduleComponent = wrapper.find("Module");
        expect(moduleComponent.props().module.coverage).toEqual(coverage);
        expect(wrapper.find("Module").props().price).toEqual(
          module.coverage * module.risk
        );
      } catch (e) {
        console.log(e);
        done.fail();
      }
      done();
    }, 2000);
    jest.runAllTimers();
  });
});
