import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import * as yup from 'yup';
import schema from './validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUser = []
const initialDisabledState = true


function App() {
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabledState, setDisabledState] = useState(initialDisabledState)

  const fetchUser = () => {
    axios.get('https://reqres.in/api/users')
      .then(result => {
        setUser(result.data)
      })
      .catch(error => {console.log(error)})
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
