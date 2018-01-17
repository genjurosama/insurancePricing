import React from 'react';
import '../App.scss'


export const Modules = ()=>{
    return (
        <div>
         <div className="jumbotron text-center">
           <div className="container">
            <h1 className="display-3">Insurance</h1>
             <h3>
               This is an application that allows you to get a quote for your insurance pricing
             </h3>

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
                <p>Coverage 0-3k, Risk 30%.</p>
                <a href="/bike">Get Price.</a>
              </div>
              
            </div>
          </div>

          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box green">
          
              <div className="box-header">
                <i className="icon ion-ios-flower"></i>
                <h2>Jwellery</h2>
              </div>

              <div className="box-content">
                <p>Coverage 500-10k, Risk 5%.</p>
                <a href="/jwellery">Get Price.</a>
              </div>
              
            </div>
          </div>
          
          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box yellow">
          
              <div className="box-header">
                  <i className="icon ion-monitor"></i>
                  <h2>Electronics</h2>
              </div>

              <div className="box-content">
                <p>Coverage 500-6k, Risk 35%.</p>
                <a href="/electronics">Get Price.</a>
              </div>
              
            </div>
          </div>
          
          
          <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12 ">
            <div className="box orange">
          
              <div className="box-header">
                <i className="icon ion-ios-americanfootball"></i>
                <h2>Sports Equipments</h2>
              </div>

              <div className="box-content">
                <p>Coverage 0-20k, Risk 30%.</p>
                <a href="/sports">Get Price.</a>
              </div>
              
            </div>
          </div>
          
     
        </div>
    </div>
</div>

       
    );
}