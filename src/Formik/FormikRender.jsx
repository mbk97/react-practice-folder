import { ErrorMessage, Field, Form, Formik } from "formik";
import "../App.css";
import React, { useEffect } from "react";

function FormikRender() {
  const [num, setNum] = React.useState();

  const handleValidation = (values) => {
    setNum(values.phone);
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }

    if (!values.username) {
      errors.name = "Name is required";
    }
    return errors;
  };

  console.log(num);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  useEffect(() => {
    if (num && num.length === 10) {
      alert("I am complete");
    }
  }, [num]);

  return (
    <div className="App">
      <div>
        <h1>Sign up</h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={handleValidation}
      >
        {({ validate }) => (
          <Form>
            <div>
              <Field name="phone" placeholder="Phone number" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <Field name="name" type="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                validate={validateEmail}
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              type="submit"
              style={{
                marginTop: "10px",
              }}
            >
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikRender;
