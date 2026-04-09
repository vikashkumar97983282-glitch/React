import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/user/addproduct", formData, {
        withCredentials: true,
      });

      alert("Product added successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error adding product:", err.response?.data || err.message);
      alert(err.response?.data || "Failed to add product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Add Product
        </h1>

        <div className="mb-4">
          <label
            htmlFor="productName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
            min="0"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="h-28 w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full rounded-md border border-gray-300 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
