import axios from "axios";
export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
