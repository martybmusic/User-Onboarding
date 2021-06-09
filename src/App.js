import React, { useState, useEffect } from 'react';
// import ReactDom from 'react-dom';
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

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(result => {
      setUser([result.data, ...user])
    })
    .catch(error => {console.log(error)})
    .finally(() => {setFormValues(initialFormValues)})
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name(),
      email: formValues.email(),
      password: formValues.password(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => setDisabledState(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header>
        <h2>Submit User Data</h2>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabledState}
        errors={formErrors}
      />

    </div>
  );
}

export default App;
