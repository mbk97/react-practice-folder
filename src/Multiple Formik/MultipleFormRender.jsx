import React from "react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useFormik,
  useFormikContext,
} from "formik";
import { formData } from "./data";

const MultipleFormRender = () => {
  // const { values } = useFormikContext();

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      address: "",
    },
  });

  const handleValidation = (values) => {
    const errors = {};
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.phone_number) {
      errors.phone_number = "Phone is required";
    }

    if (!values.name) {
      errors.name = "Name is required";
    }

    return errors;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  console.log(formik.initialValues.email, "HERE");

  return (
    <div className="flex items-center justify-center flex-col mt-4">
      <Formik
        initialValues={formik.initialValues}
        onSubmit={handleSubmit}
        validate={handleValidation}
      >
        {({ validate, handleChange }) => (
          <Form>
            {formData.map(({ name, id, type, placeholder }) => {
              return (
                <div key={id} className="mt-3">
                  <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="border w-[200px] p-2 h-[50px] rounded-[8px]"
                    validate={type === "email" && validateEmail}
                    onChange={handleChange}
                  />
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            })}
            <div>
              <button
                type="submit"
                className="button bg-blue p-[10px] rounded-[10px] w-[120px] text-[white] mt-2 capitalize "
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultipleFormRender;
