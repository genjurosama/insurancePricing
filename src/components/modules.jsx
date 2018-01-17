import React from 'react';
import '../App.scss'

export const Modules = ()=>{
    return (
        <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to Insurance quote</h1>
            <p>This is an application that allows you to get a quote for your insurance pricing</p>
          </div>
        </div>
  
        <div className="row">
                    
        <div className="col-lg-3">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Bike insurance
                </div>
                <div className="panel-body text-center">
                    <a href="/bike" className="btn btn-primary dim btn-large-dim" type="button"><i className="fa fa-motorcycle"></i></a>
                </div>
            </div>
        </div>
      
      
        <div className="col-lg-3">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Jwellery
                </div>
                <div className="panel-body text-center">
                    <a href="/jwellery" className="btn btn-primary dim btn-large-dim" type="button"><i className="fa fa-diamond"></i></a>
                </div>
            </div>
        </div>
      
      
        <div className="col-lg-3">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Electronics
                </div>
                <div className="panel-body text-center">
                    <a href="/employeeRequestsModule" className="btn btn-primary dim btn-large-dim" type="button"><i className="fa fa-desktop"></i></a>
                </div>
            </div>
        </div>
      
      <div className="col-lg-3">
          <div className="panel panel-primary">
              <div className="panel-heading">
                  Sports Equipment
              </div>
              <div className="panel-body text-center">
                  <a href="/HRModule" className="btn btn-primary dim btn-large-dim" type="button"><i className="fa fa-soccer-ball-o"></i></a>
              </div>
          </div>
      </div>
     
  </div>
        </div>

       
    );
}