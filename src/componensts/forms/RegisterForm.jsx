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
    country: [],
    skills: "",
    bio: "",
  };
  const [formData, setFormData] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully! Check console for JSON data.");
    setFormData(defaultValues);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const countries = ["SriLanka", "Thailand", "Vietnam", "Singapore", "Bali"];
  // const formValidation = yup.object().shape({
  //   name: yup.string().required(),
  //   age: yup.number().positive().integer().min(18).max(100).required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(4).max(8).required(),
  // });

  return (
    <>
      <div className="container">
        <h1>Registration Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label for="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <p>Gender</p>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onClick={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onClick={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <label for="female">female</label>
          <br />

          <label for="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="SriLanka">SriLanka</option>
            <option value="Thailand">Thailand</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Singapore">Singapore</option>
            <option value="Bali">Bali</option>
          </select>

          <p>Skills</p>
          <input
            type="checkbox"
            id="html"
            name="html"
            value={formData.skills.includes("html")}
            onClick={(e) =>
              setFormData({ ...formData, skills: e.target.defaultValues })
            }
          />
          <label for="html">HTML</label>

          <input
            type="checkbox"
            id="css"
            name="css"
            value={formData.skills.includes("css")}
            onClick={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
          <label for="css">CSS</label>

          <input
            type="checkbox"
            id="javascript"
            name="javascript"
            value={formData.skills.includes("javascript")}
            onClick={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
          <label for="javascript">JavaScript</label>

          <input
            type="checkbox"
            id="react"
            name="react"
            value={formData.skills.includes("react")}
            onClick={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
          <label for="react">React</label>

          <input
            type="checkbox"
            id="nodejs"
            name="nodejs"
            value={formData.skills.includes("nodejs")}
            onClick={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
          <label for="nodejs">Node.js</label>

          <p>Bio</p>
          <textarea
            name="bio"
            id=""
            cols="50"
            rows="05"
            placeholder="Tell something about yourself...."
            value={formData.bio}
          ></textarea>

          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
