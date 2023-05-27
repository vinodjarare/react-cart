import Wrapper from "./Wrapper";
import BgImage from "../assets/bg.jpg";
import useProducts from "../hooks/useProducts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const { products, loading, getAllProducts } = useProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="relative h-[calc(100vh-48px)] w-full">
        <img
          src={BgImage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full h-full flex flex-col justify-center items-start pl-10">
          <h5 className="font-bold text-white text-6xl">NEW SEOSON ARRIVAL </h5>

          <p className="text-lg font-medium text-blue-700">
            CHECK OUT ALL THE TRENDS
          </p>
        </div>
      </div>
      <Wrapper>
        <h1 className="text-3xl font-bold text-center my-6">
          Featured Products
        </h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 gap-2 justify-center">
                {products.map((product) => (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-lg"
                    key={product.id}
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={product.image}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title}
                      </h2>
                      <p className="mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
