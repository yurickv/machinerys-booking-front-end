import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./formAddMachine.css";
import { Image, CloudinaryContext } from "cloudinary-react";
import { oblastiUkrainy } from "../../constant/locationCoordinate";
import { validationSchema } from "../../helpers/yupValidationSchema";


export const FormAddMachine = ({ newMachine }) => {
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg"
  );

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    // Create a FormData object to send the file to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gg8cyrx9");

    // Make a POST request to Cloudinary API for image upload
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dtfpfapbp/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setImage(data.secure_url);
        console.log(data.secure_url);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
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
      foto_url: image,
    });

    resetForm();
    setImage(
      "https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg"
    );
  };

  const handleClear = (formik) => {
    formik.resetForm();
    setImage(
      "https://cdn.pixabay.com/photo/2023/07/01/19/31/ai-generated-8100775_1280.jpg"
    );
  };

  return (
    <>
      <div className="form-container">
        <h3 className="title-form">Add your own machinery</h3>
        <label htmlFor="foto">Upload your image</label>
        <input
          id="foto"
          className="input"
          type="file"
          onChange={handleUpload}
        />
        {image && (
          <div className="foto-input">
            <Image
              cloudName="dtfpfapbp"
              publicId={image}
              width="300"
              crop="scale"
            />
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
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="form-container">
            <Field
              className="input"
              type="text"
              name="name"
              placeholder="Your machine"
            /><ErrorMessage name="name" component="div" className="error-message" />
            <Field
              className="input"
              type="text"
              name="type"
              placeholder="Type"
            /><ErrorMessage name="type" component="div" className="error-message" />
            <Field
              as="select"
              className="input"
              name="location"
            >
              <option value="" disabled hidden>
                Select location
              </option>
              {oblastiUkrainy.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Field><ErrorMessage name="location" component="div" className="error-message" />
            <Field
              className="input"
              type="number"
              name="price"
              placeholder="Price"
            /><ErrorMessage name="price" component="div" className="error-message" />
            <Field
              className="input"
              type="text"
              name="contact"
              placeholder="Lessor name"
            /><ErrorMessage name="contact" component="div" className="error-message" />
            <Field
              className="input"
              type="text"
              name="number"
              placeholder="Phone number"
            /><ErrorMessage name="number" component="div" className="error-message" />
            <Field
              as="textarea"
              className="input-description"
              type="text"
              name="description"
              placeholder="Description"
            /><ErrorMessage name="description" component="div" className="error-message" />
            <button
              type="reset"
              className="button-clear"
              onClick={() => handleClear(formik)}
            >
              Clear
            </button>
            <button type="submit" className="button-form">
              RENT OUT
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
