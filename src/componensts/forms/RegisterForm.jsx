import React, { useState } from "react";
import "../../styles/RegisterForm.css";
import * as yup from "yup";

function RegisterForm() {
  const defaultValues = {
    name: "",
    age: "",
    email: "",
    password: "",
    gender: "male",
    country: "",
    skills: [],
    bio: "",
  };

  const [datas, setDatas] = useState(defaultValues);
  const [error, setError] = useState({});

  const schema = yup.object().shape({
    name: yup.string().min(3).max(20).required("Name is required..."),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .max(100)
      .required("Age is required....."),
    email: yup
      .string()
      .email("Provide a valid Email address...")
      .required("Email is required...."),
    password: yup.string().min(4).max(8).required("Password is required..."),
    gender: yup.string().required("Gender is required..."),
    country: yup.string().required("Select a country..."),
    skills: yup
      .array()
      .min(1, "Select at least one skill")
      .required("Skills are required..."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    try {
      await schema.validate(formObj, { abortEarly: false });
      const validForm = await schema.isValid(formObj);
      console.log(datas);
      alert("Form submitted successfully! Check console for JSON data.");
      setDatas(defaultValues);
    } catch (err) {
      setError(err.errors);
      console.log(err.errors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatas((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClick = () => {
    setDatas.country(!checked);
  };

  // const countries = ["SriLanka", "Thailand", "Vietnam", "Singapore", "Bali"];

  return (
    <>
      <div className="container">
        <h1>Registration Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="fullname">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={datas.name}
              onChange={handleChange}
            />
            {error.name && <div className="error">{error.name}</div>}
          </div>

          <div className="age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={datas.age}
              onChange={handleChange}
            />
            {error.age && <div className="error">{error.age}</div>}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={datas.email}
              onChange={handleChange}
            />
            {error.email && <div className="error">{error.email}</div>}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={datas.password}
              onChange={handleChange}
            />
            {error.password && <div className="error">{error?.[3]}</div>}
          </div>

          <div className="gender">
            <p>Gender</p>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={datas.gender === "male"}
              onChange={handleChange}
            />

            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={datas.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">female</label>
            {error.gender && <div className="error">{error.gender}</div>}
          </div>
          <br />

          <div className="countries">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={datas.country}
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="SriLanka">SriLanka</option>
              <option value="Thailand">Thailand</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Singapore">Singapore</option>
              <option value="Bali">Bali</option>
            </select>
            {error.country && <div className="error">{error.country}</div>}
          </div>

          <div className="skills">
            <p>Skills</p>
            <input
              type="checkbox"
              id="html"
              name="html"
              value={datas.skills.includes("html")}
              onChange={handleChange}
            />
            <label htmlFor="html">HTML</label>

            <input
              type="checkbox"
              id="css"
              name="css"
              value={datas.skills.includes("css")}
              onChange={handleChange}
            />
            <label htmlFor="css">CSS</label>

            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              value={datas.skills.includes("javascript")}
              onChange={handleChange}
            />
            <label htmlFor="javascript">JavaScript</label>

            <input
              type="checkbox"
              id="react"
              name="react"
              value={datas.skills.includes("react")}
              onChange={handleChange}
            />
            <label htmlFor="react">React</label>

            <input
              type="checkbox"
              id="nodejs"
              name="nodejs"
              value={datas.skills.includes("nodejs")}
              onChange={handleChange}
            />
            <label htmlFor="nodejs">Node.js</label>
            {error.skills && <div className="error">{error.skills}</div>}
          </div>

          <p>Bio</p>
          <textarea
            name="bio"
            id=""
            cols="50"
            rows="05"
            placeholder="Tell something about yourself...."
          ></textarea>

          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
