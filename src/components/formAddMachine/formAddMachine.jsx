import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import "./formAddMachine.css";
import { Image, CloudinaryContext } from 'cloudinary-react';


export const FormAddMachine = ({ newMachine }) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg");

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    // Create a FormData object to send the file to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'gg8cyrx9');

    // Make a POST request to Cloudinary API for image upload
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dtfpfapbp/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setImage(data.secure_url);
        console.log(data.secure_url)
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };



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
      foto_url: image
    });

    resetForm();
    setImage("https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg")
  };

  const handleClear = (formik) => {
    formik.resetForm();
    setImage("https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg")
  };

  return (
    <>
      <div><label className="input"> Upload your image {" "} <input type="file" onChange={handleUpload} /></label>

        {image && (
          <div className='foto-input'>
            <Image cloudName="dtfpfapbp" publicId={image} width="300" crop="scale" />
          </div>
        )}
      </div>
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

      </Formik></>
  );
};
