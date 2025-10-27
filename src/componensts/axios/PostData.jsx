import React, { useState } from "react";
import axios from "axios";

function PostData() {
  const defaultValues = {
    name: "",
    email: "",
    inActive: true,
  };

  const URL = "https://express-mongo-connection-sigma.vercel.app/api/users";

  const [formData, setFormData] = useState(defaultValues);

  // const [variable-name] = axios.[http.method]([URL], [Data])
  const postUsers = async () => {};

  postUsers();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, formData);
      alert("User created successfully");
      console.log(response.data);
      setFormData(defaultValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-container">
      <div>
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <input type="submit" value="Send" />
            <br />
          </form>
        </>
      </div>
    </div>
  );
}

export default PostData;
