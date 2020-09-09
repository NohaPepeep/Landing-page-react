import React, { Component } from 'react';
export default class Form extends Component {
  render() {
    return(
     <div className="body">
         <h3 className="form-h3">Contact us to get started</h3>
         <p className="form-p">Well reply when we get back from fishing</p>
         <form className="form">
          <div className="labelCont"><div><label className="labelName">Name</label><input className="inputName"></input></div>
          <div><label className="labelEmail">Email</label><input className="inputEmail"></input></div> 
          </div> <label>Timeline</label><input></input>
           <label>Message</label><input></input>
           <div className="divButton"><button className="formbutton">SEND</button></div>
         </form>
     </div>
    );
  }
}
