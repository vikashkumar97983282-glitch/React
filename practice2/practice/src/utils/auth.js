import axios from "axios";

export const checkAuth = async () => {
  await axios.get("http://localhost:5000/user/products", {
    withCredentials: true,
  });

  return true;
};
