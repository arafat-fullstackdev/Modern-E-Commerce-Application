import React, { Component } from 'react';
import { Formik } from 'formik';

class Auth extends Component {
    render()
   return (
    <div className="form">
       <Formik initialValues={
         {
            email:"",
            password:"",
            passwordConfirmed:"",
         }
       }
       >
       </Formik>
       </div>
  )
}

