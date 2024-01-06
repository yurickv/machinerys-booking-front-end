import React from "react";
import { Formik, Form, Field } from "formik";
import "./formAddMachine.css";

export const FormAddMachine = ({ newMachine }) => {
  const handleSubmit = (
    { name, number, contact, location, price, type, description },
    { resetForm }
  ) => {
    newMachine({
      name: name,
      number: number,
      contact: contact,
      location: location,
      price: `${price}`,
      type: type,
      description: description,
    });
    resetForm();
  };

  const handleClear = (formik) => {
    formik.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        contact: "",
        location: "",
        price: "",
        number: "",
        description: "",
      }}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="form-container">
          <Field
            className="input"
            type="text"
            name="name"
            minLength="5"
            maxLength="25"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
          <Field
            className="input"
            type="text"
            name="type"
            minLength="5"
            maxLength="25"
            placeholder="Type"
            title="Type may contain only letters, apostrophe, dash and spaces."
            required
          />
          <Field
            className="input"
            type="text"
            name="contact"
            minLength="3"
            maxLength="25"
            placeholder="Contact"
            title="Contact may contain only letters, apostrophe, dash and spaces."
            required
          />
          <Field
            className="input"
            type="text"
            name="location"
            minLength="3"
            maxLength="25"
            placeholder="Location"
            title="Location may contain only letters, apostrophe, dash and spaces."
            required
          />
          <Field
            className="input"
            type="number"
            name="price"
            min="100"
            max="2000"
            placeholder="Price"
            title="Price - only numbers."
            required
          />
          <Field
            className="input"
            type="text"
            name="number"
            minLength="7"
            maxLength="10"
            placeholder="Phone number"
            title="Only numbers"
            required
          />
          <Field
            as="textarea"
            className="input-descrition"
            type="text"
            name="description"
            minLength="5"
            maxLength="250"
            placeholder="Description"
            title="Description may contain only letters, apostrophe, dash and spaces."
            required
          />
          <button type="submit" className="button-form">
            SAVE
          </button>
          <button
            type="reset"
            className="button-form"
            onClick={() => handleClear(formik)}
          >
            CLEAR
          </button>
        </Form>
      )}
    </Formik>
  );
};
