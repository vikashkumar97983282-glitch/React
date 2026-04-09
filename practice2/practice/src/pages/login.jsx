import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };


 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/user/login",
      formData,
      { withCredentials: true } // important for cookies
    );

    console.log("Response:", res.data);
    navigate("/dashboard");
    alert("Login successful");

  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    alert(err.response?.data || "Login failed");
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login
        </h1>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Login
        </button>
        <Link to="/register" className="mt-4 block text-center text-sm text-blue-600 hover:underline">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
