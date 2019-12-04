import React, { Component } from 'react'
import logo from './DV-logo.svg';
import './App.css';
import './test.css'

class App extends Component {
  state={
    contractId: '',
  }
  setContractId = (contractId)=>{
    this.setState({contractId});
  }
  render(){
    return (
      <div className="test">
        
      </div>
      // <div className="App">
      //   <header className="App-Header">
      //     {/* <h2 className="Header-Text">  */}
      //       <a 
      //         href="http://digitalversatility.com" 
      //         target="_blank"
      //         className="logo" >  
      //         <img src={logo} alt=""/> 
      //       </a>
      //       <h3 className="App_Header_h3">Digital Payment Center</h3>
      //     {/* </h2> */}
      //   </header>
      //   <div className="App_Body">
  
      //     <form action="" className="Payment_Form">

      //       <div className="Amount_Container">
      //         <label htmlFor="NameOnCard" className="Amount_Container_Label">Amount</label>
      //         <br/> 
      //         <input type="text" name="NameOnCard" className="Amount_Container_Input" placeholder="3000" autoFocus required/>
      //       </div>

      //       <div className="form-group">
      //         <label htmlFor="NameOnCard">Name on Card</label>
      //         <input type="text" name="NameOnCard" placeholder="John Doe" className="input nameInput" required/>
      //       </div>
            
      //       <div className="form-group">
      //         <label htmlFor="Card_Number">Card Number</label>
      //         <input type="text" name="Card_Number" placeholder="4444-4444-4444-4444" className="input cardNumberInput" required/>
      //       </div>
            
      //       <div className="form-group">
      //         <label htmlFor="CSV_Number">CSV</label>
      //         <input type="text" name="CSV_Number" placeholder="123" className="input csvInput" required/>
      //       </div>
            
      //       <div className="form-group">
      //         <label htmlFor="expireDate">Expire Date</label>
      //         <input className="Form1_input" type="text" name="expireDate" placeholder="01/12" className="input expireInput" required/>
      //       </div>
            
      //       <input className="Payment_Form_Submit" type="submit" value="submit"/>
          
      //     </form>
  
      //   </div>
      // </div>
    );
  }
}

export default App;
