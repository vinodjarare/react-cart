import axios from "axios";
export const getProduct = async (id: number) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
