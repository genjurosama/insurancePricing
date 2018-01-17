import React from 'react';
import '../App.scss'


export const Modules = ()=>{
    return (
        <div>
         <div className="jumbotron text-center">
           <div className="container">
             <h3>
               This is an application that allows you to get a quote for your insurance pricing
             </h3>
             <h1 className="display-3">Bike Insurance</h1>
             
           </div>
         </div>
        
        
        <div className="container">
        <div className="row">
           
          <h2 className="text-center page-title">our insurance packages</h2>
          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box blue text-center">
          
              <div className="box-header">
                <i className="icon ion-android-bicycle"></i>
                <h2>Bike insurance</h2>
              </div>

              <div className="box-content">
                <p>An application that allows you to get a quote for your insurance pricing.</p>
                <a href="/bike">Learn More..</a>
              </div>
              
            </div>
          </div>

          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box green">
          
              <div className="box-header">
                <i className="icon ion-ios-flower"></i>
                <h2>Bike insurance</h2>
              </div>

              <div className="box-content">
                <p>An application that allows you to get a quote for your insurance pricing.</p>
                <a href="/jwellery">Learn More..</a>
              </div>
              
            </div>
          </div>
          
          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box yellow">
          
              <div className="box-header">
                  <i className="icon ion-monitor"></i>
                  <h2>Bike insurance</h2>
              </div>

              <div className="box-content">
                <p>An application that allows you to get a quote for your insurance pricing.</p>
                <a href="/electronics">Learn More..</a>
              </div>
              
            </div>
          </div>
          
          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box orange">
          
              <div className="box-header">
                <i className="icon ion-ios-americanfootball"></i>
                <h2>Bike insurance</h2>
              </div>

              <div className="box-content">
                <p>An application that allows you to get a quote for your insurance pricing.</p>
                <a href="/sports">Learn More..</a>
              </div>
              
            </div>
          </div>
          
          <button className="btn btn-small yellow">Hello</button>
     
        </div>
    </div>
</div>

       
    );
}