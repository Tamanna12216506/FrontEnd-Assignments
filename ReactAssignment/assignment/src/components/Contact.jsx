import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Message Sent!");
    setData({
        name: "",
        email: "",
        message: ""
    });

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>

      <p>Email: abc@gmail.com</p>
      <p>Phone: 9876543210</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={data.name} onChange={handleChange}/>
        <br /><br />

        <input type="email" name="email" placeholder="Enter Email" value={data.email} onChange={handleChange}/>
        <br /><br />

        <textarea name="message" placeholder="Enter Message" value={data.message} onChange={handleChange}/>
        <br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;