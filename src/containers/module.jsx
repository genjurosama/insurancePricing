import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchModule,
  changeCoverage,
  requestcalculatePrice
} from "../actions/modules";
import "../App.scss";

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
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <p>Simulate</p>
            <h1 className="display-3">{this.props.module.name} Insurance</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h5 className="text-center page-title">
              Get Quote now!Please choose your coverage.
            </h5>
            <div className="col-md-6 col-md-offset-3">
              <div className="col-md-9">
                <input
                  id="coverageInput"
                  type="range"
                  value={this.props.module.coverage}
                  onChange={this.handleChange}
                  step={10}
                  min={this.props.module.minCoverage}
                  max={this.props.module.maxCoverage}
                />
                coverage :{this.props.module.coverage >
                this.props.module.minCoverage
                  ? this.props.module.coverage
                  : this.props.module.minCoverage}
              </div>
              <div className="col-md-3">
                <button id="calculateBtn" className="btn btn-primary" onClick={this.handleClick}>
                  Calculate
                </button>
              </div>
              <div className="row">
                <div className="col-md-12 text-center result">
                  <strong>
                    {" "}
                    Price: {this.props.price > 0 ? this.props.price : 0}{" "}
                  </strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" />
            </div>
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
