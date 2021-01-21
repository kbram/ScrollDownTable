import './App.css';
import image from "./images/images.png";
import image1 from "./images/profile.jpeg";
import React, { Component } from 'react';
class App extends Component {
  state = {
    menu:0,
   }
  render() { 
    return (
      <div className="App">
      <div className="d-flex justify-content-center">
       
          <div className="paymentProfile  text-center">
            <img src={image1} alt="Avatar" className="paymentProfileImage"/>
            <div className="container-fluid">
            <div className="row">
              <div className="col-6 paymentProfileDetails text-left pl-5">
                <h1 className="payeeName">Karunaaharan Bavaram</h1>
                <div className="row">
                  <div className="col-3">
                    <h6 className="profileText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                  </div>
                  <div className="col-1">
                    <h6 className="profileText">:</h6>
                  </div>
                  <div className="col">
                    <h6 className="profileText">+60 021 222 3569</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h6 className="profileContentText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                  </div>
                  <div className="col-1">
                  <h6 className="profileContentText">:</h6>
                  </div>
                  <div className="col">
                  <h6 className="profileContentText">smith45@gmail.com</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 paymentDetails text-left pl-5">
              <h1 className="payeeName">Payments</h1>
                <div className="row">
                  <div className="col-3">
                    <h6 className="profileText"> <i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp;&nbsp;Rent Payments</h6>
                  </div>
                  <div className="col-1">
                    <h6 className="profileText">:</h6>
                  </div>
                  <div className="col">
                    <h6 className="profileText"><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;400.00</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h6 className="profileContentText"> <i class="fa fa-money" aria-hidden="true"></i> &nbsp;&nbsp;Cost </h6>
                  </div>
                  <div className="col-1">
                  <h6 className="profileContentText">:</h6>
                  </div>
                  <div className="col">
                  <h6 className="profileContentText"><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;20.00</h6>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-5">
                    <h4><span class="badge badge-secondary loginStripe">Login to stripe account</span></h4>
                  </div>
                  <div className="col-3">
                    <h4><span class="badge badge-secondary payOut">Pay Out Now</span></h4>
                  </div>
                 
                 
                </div>
              </div>
            </div>
            </div>
           
          
        </div>
      </div>


        {/* table */}


        <div className="contractMainCard">
          <div className={"1"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("1")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">James Smith</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1258</h3>
              </div>
              <div className="col-3 text-right status pt-2 pr-5">
                <h4><span class="badge badge-secondary warningText">Pending</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("1")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 3569</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">smith45@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;25 Feb 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;25 Feb 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark contractButton primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark contractButton primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        
        <div className="contractMainCard">
          <div className={"2"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("2")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Maria Garcia</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1277</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary warningText">Pending</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("2")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 7149</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">marijaz14@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;5 May 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;5 May 2022</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark contractButton primaryText"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark contractButton primaryText"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="contractMainCard">
          <div className={"3"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("3")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName">Kyle William</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1374</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5  ">
                <h4><span class="badge badge-secondary successText">Approved</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("3")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 7854</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">willi12@gmail.com</h6>
                </div>
              </div>
              
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;27 June 2018</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;27 June 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="contractMainCard">
          <div className={"4"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("4")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Joe	Ethan</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1428</h3>
              </div>
              <div className="col-3 status pt-2 text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary successText">Approved</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("4")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 9562</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">john1458@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;17 Nov 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;17 Nov 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      

        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      

        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      

        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      

        <div className="contractMainCard">
          <div className={"5"===this.state.menu?" contractCard":"contractCard" } onClick={()=> this.contractOpen("5")}>
            <div className="row">
              <div className="col-1">
                <img className="contractImg" src={image} alt="image1"/>
              </div>
              <div className="col-5 text-left pt-2">
                <h3 className="contractName ">Damian	Damian</h3>
              </div>
              <div className="col-3 text-left pt-3">
                <h3 className="unitName"> <i class="fa fa-building " aria-hidden="true"></i>&nbsp;&nbsp;Unit :&nbsp;&nbsp;B1298</h3>
              </div>
              <div className="col-3 status text-right pt-2 pr-5 ">
                <h4><span class="badge badge-secondary dangerText">Rejected</span></h4>
              </div>
            </div>
          </div>
          <div className={this.menuStyle("5")} >
          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-4 text-left pt-2">
              <br></br>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;&nbsp;Phone No </h6>
                </div>
                <div className="col-1">
                  <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                  <h6 className="detailsText">+60 021 222 2463</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                   <h6 className="detailsText"> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;&nbsp;Email </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText">:</h6>
                </div>
                <div className="col">
                <h6 className="detailsText">damian7@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-5 text-left pt-1">
              <div className="row">
                <div className="col-4">
                  
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText ">Start</h6>
                </div>
                <div className="col-4 pl-5">
                <h6 className="detailsText">End</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;&nbsp;Contract </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2019</h6>
                </div>
                <div className="col-4 ">
                  <h6 className="detailsText1"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;29 Dec 2021</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                   <h6 className="detailsText"> <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Address </h6>
                </div>
                <div className="col-1">
                <h6 className="detailsText1">:</h6>
                </div>
                <div className="col-8">
                  <h6 className="detailsText1"> School St., 2A, Los Angeles, California, United States</h6>
                </div>
               
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;&nbsp;CheckIn List</span></h4>
                </div>
                <div className="col-1">
                  </div>
                <div className="col-3">
                <h4><span class="badge badge-dark primaryText contractButton"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp; Agreement</span></h4>
                </div>
               </div>
            </div>
            <div className="col-2 status pt-2 text-right pr-5">
              <div className="row">
                <div className="col">
                  <h5><span class="badge badge-dark contractButton"> Rent :&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;2500</span></h5>
                </div>
              </div>
               <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <div className="row ">
                <div className="col ">
                  <h4><span class="badge badge-secondary  infoText editButton">Edit</span></h4>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      




     
      </div>
    );
  }
  menuStyle(mode){
    let classes = "contractCardDetail ";
    classes += (this.state.menu === mode) ? "showMenu contractCardDetailPaddingBottom" :"hideMenu";
    return classes;
  }
  contractOpen=mode=>{
    this.setState({menu:mode===this.state.menu?0:mode});
  }
}

export default App;
