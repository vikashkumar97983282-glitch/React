import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/products", { withCredentials: true });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err.response?.data || err.message);
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate("/", { replace: true });
        }
      }
    };

    fetchData();
  }, [navigate]);

  // console.log("Dashboard data:", data);


  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/user/logout", {}, { withCredentials: true });
      alert("Logged out successfully");
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
      alert(err.response?.data || "Logout failed");
    }
  }


  const stats = [
    { title: "Users", value: "1,284" },
    { title: "Orders", value: "326" },
    { title: "Revenue", value: "$12,480" },
    { title: "Growth", value: "+18%" },
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-3 rounded-lg bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back. Here is a quick overview of your app.</p>
          </div>
          <button
            onClick={() => navigate("/add-product")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Add Product
          </button>
          <button
            onClick={() => logout()}
            className="rounded-md bg-blue-600 m-0 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Logout
          </button>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-800">{item.value}</h2>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Products</h2>
              <span className="text-sm text-gray-500">{data.length} items</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.map((product) => (
                <div key={product._id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                  <p className="mt-2 text-sm text-gray-600">Price: {product.price}</p>
                  <p className="text-sm text-gray-600">Status: {product.description}</p>
                  <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
                    View Product
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-600">
              <div className="rounded-md bg-gray-50 p-4">2 new products added today</div>
              <div className="rounded-md bg-gray-50 p-4">5 orders completed</div>
              <div className="rounded-md bg-gray-50 p-4">1 product is out of stock</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
