import React from 'react';

function Form (props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target

        const valueUsed = type === 'checkbox' ? checked: value
        change(name, valueUsed)
    }

    return (
        <Form onSubmit={onSubmit}>
            <div>
                <h3>Create Username</h3>
                <button id='buttonSubmit' disabled={disabled}>SUBMIT</button>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div>
                <label>Name
                    <input value={values.name} onChange={onChange} name='name' type='text' />
                </label>
                
                <label>Email
                    <input value={values.email} onChange={onChange} name='email' type='text' />
                </label>

                <label>Password
                    <input value={values.password} onChange={onChange} name='password' type='text' />
                </label>

                <label>Terms of Service
                    <input value={values.terms} onChange={onChange} name='terms' type='checkbox' />
                </label>
            </div>
        </Form>
    )
}

export default Form