import axios from "axios";

const API = "https://outlieralgo.cloud/api";

export const fetchProducts = async (search = "", type = "") => {
  const res = await axios.get(`${API}/products`, {
    params: {
      search,
      product_type: type,
    },
  });
  return res.data;
};