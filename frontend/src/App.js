import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      Name : '',
      Address:'',
      Email:'',
      Phone:'',
      Aadhar:'',
      Pan:'',
      Img:''
    }
  }
  changeHandler = e =>{
    this.setState({[e.target.name] : e.target.value});
  }
  imgChangeHandler = e =>{
    //console.log(e.target.files[0]);
    //this.setState({Img:e.target.files[0]});
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = e =>{
      //console.log('image data',e.target.result);
      this.setState({Img : e.target.result});
    }
  }
  submitHandler = e => {
    //e.preventDefault();
    const { Name, Address, Email, Phone, Aadhar, Pan, Img } = this.state;
    let formData = new FormData();
    
    formData.append('Name', Name);
    formData.append('Address', Address);
    formData.append('Email', Email);
    formData.append('Phone', Phone);
    formData.append('Aadhar', Aadhar);
    formData.append('Pan', Pan);
    formData.append('Img', Img);

    console.log(formData);

    const url = 'http://localhost:5000';
          
          
    axios.post(url, formData)
    .then(res => console.log('Data send'))
    .catch(err => console.log(err.data));

    alert('data saved to the server');
     
  }
  
  
  render(){
    const{ Name,Address,Email,Phone,Aadhar,Pan } = this.state;
    return (
      <div className="App">
        <div className = 'wrapper'>
            <div className = "form-wrapper">
            <h1>KYC Form</h1>
              <form action = '' onSubmit = {this.submitHandler} >  
                
                <div className = "form-group row">
                  <label htmlFor = "Name" className="col-sm-2 col-form-label col-form-label-sm "><b>Name:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "text" placeholder = 'abc..' name = 'Name' value = {Name} onChange = {this.changeHandler} required></input>
                  </div>
                  
                </div>

                <div className = "form-group row">
                  <label htmlFor = "Address" className="col-sm-2 col-form-label col-form-label-sm"><b>Address:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "text" placeholder = 'address..' name = 'Address' value = {Address} onChange = {this.changeHandler} required></input>
                  </div>
                </div>
                
                <div className = "form-group row">
                  <label htmlFor = "Email" className="col-sm-2 col-form-label col-form-label-sm"><b>Email:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "text" placeholder = 'abc@domainname.com' name = 'Email' value = {Email} onChange = {this.changeHandler}  required></input>
                  </div>
                </div>

                <div className = "form-group row">
                  <label htmlFor = "Phone" className="col-sm-2 col-form-label col-form-label-sm"><b>Phone:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "tel" placeholder = 'xxxxxxxxxx' name = 'Phone'value = {Phone} onChange = {this.changeHandler} required pattern="[0-9]{10}"></input>
                  </div>
                </div>
                <div className = "form-group row">
                  <label htmlFor = "Aadhar" className="col-sm-2 col-form-label col-form-label-sm"><b>Aadhar:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "tel" placeholder = 'xxxx-xxxx-xxxx' name = 'Aadhar' value = {Aadhar} onChange = {this.changeHandler} required pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"></input>
                  </div>
                </div>
                <div className = "form-group row">
                  <label htmlFor = "Pan" id = 'pan' className="col-sm-2 col-form-label col-form-label-sm"><b>Pan Card:</b></label>
                  <div className="col-sm-10">
                    <input className = "form-control form-control-sm" type = "tel" placeholder = 'xxxx-xxxx-xxxx' name = 'Pan' value = {Pan} onChange = {this.changeHandler} required pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"></input>
                  </div>
                </div>
                <div className = "form-group row">
                  <label htmlFor = "Img" className="col-sm-2 col-form-label col-form-label-sm"><b>Image:</b></label>
                  <div className="custom-file col-sm-10">
                    <input type="file" className = "form-control" name="Img" onChange = { this.imgChangeHandler } ></input>
                  </div>
                </div> 
                
                <button type="submit">Submit</button>
              </form>
            </div> 
        
        </div>
        
      </div>
    );
  }
}

export default App;
