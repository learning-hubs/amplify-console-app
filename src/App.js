import React from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from "aws-amplify-react";
import { API } from "aws-amplify";
import axios from "axios";


Amplify.configure(awsconfig);

class App extends React.Component {
  callAmplifyApi = async () => {
    const res = await API.get('todos', '/items', {});
    console.log("API Response: ", res);
  }

  callSlsApi = () => {
    axios.get(' https://w3rj68ghf2.execute-api.us-east-2.amazonaws.com/dev/todos')
      .then(res => {
        console.log(res);
        return res.data;
        // return res;
      })
      .catch(err => console.log(err));   
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World</p> 
          <button onClick={this.callAmplifyApi}>Call Amplify Rest API</button>
          <hr/>
          <button onClick={this.callSlsApi}> Call Serverless Endpoint</button>
          <h6>REMOVED BUTTONS</h6>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
