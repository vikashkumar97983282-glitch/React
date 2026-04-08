import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    profileImage: null,
  });

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Register
        </h1>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

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

        <div className="mb-4">
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

        <div className="mb-4">
          <label htmlFor="age" className="mb-2 block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="profileImage" className="mb-2 block text-sm font-medium text-gray-700">
            Profile Image
          </label>
          <input
            id="profileImage"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
