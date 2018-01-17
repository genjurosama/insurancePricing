import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchModule,
  changeCoverage,
  requestcalculatePrice
} from "../actions/modules";
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";
import { Button } from "react-bootstrap";

class Module extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchModule(this.props.currentModule);
  }
  handleClick(e) {
    this.props.requestcalculatePrice(
      this.props.module.coverage,
      this.props.module.risk
    );
  }

  handleChange(e) {
    this.props.changeCoverage(e.target.value);
  }

  render() {
    return (
      <div class="contentDiv">
        <div className="row">Please choose your coverage</div>
        <div className="row">
          <div className="col-md-6">
            <input
              id="coverageInput"
              type="range"
              onChange={this.handleChange}
              step={10}
              min={this.props.minCoverage}
              max={this.props.module.maxCoverage}
            />
            coverage :{this.props.module.coverage}
          </div>
          <div className="col-md-6">
            <button className="btn btn-submit calculateBtn" onClick={this.handleClick}>
              Calculate
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Price:<div className='price'>{this.props.price > 0 ? this.props.price : 0}</div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 *
 * @param {*} state
 * @returns {Object} of mapped state fields to component props
 */

function mapStateToProps(state) {
  console.log("new state:", state);
  return {
    module: state.moduleReducer.module,
    price: state.moduleReducer.price
  };
}

/**
 *
 * @param {*} dispatch
 * binds actions with dispatch object and makes them accessible from component props
 */

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchModule, changeCoverage, requestcalculatePrice },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Module);
