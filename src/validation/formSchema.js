import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name required')
        .min(5, 'Name must be at least 5 characters long'),
    email: yup  
        .string()
        .email('Not a valid Email Address')
        .required('Email Address required')
    password: yup
        .string()
        .required('Password required')
        .min(5, 'Password must be at least 5 characters long')
    terms: yup.boolean()        
})

export default formSchema