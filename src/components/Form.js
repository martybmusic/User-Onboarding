import React from 'react';

export default function Form (props) {
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
                    <div></div>
                </div>
            </div>
        </Form>
    )
}