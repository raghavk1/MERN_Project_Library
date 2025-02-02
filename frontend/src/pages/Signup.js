import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import CSS file

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed!");
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="signup-container"
    >
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <motion.input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Signup
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Signup;
