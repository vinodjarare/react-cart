import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import Wrapper from "../Wrapper";
import { Product } from "../../types";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";

const Products = () => {
  const { products, loading, getAllProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  // filter product base on category
  const filterProduct = useCallback(
    (category: string) => {
      if (category === "all") {
        setFilteredProducts(products);
      } else {
        const updatedProducts = products.filter(
          (product) => product.category === category
        );
        setFilteredProducts(updatedProducts);
      }
    },
    [products]
  );

  return (
    <Wrapper>
      {loading ? (
        <ProductsSkeleton />
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center justify-between box-border px-5 py-2 border-b-2 border-gray-200 w-full mb-20">
              <h1 className="text-gray-900 text-3xl title-font font-medium">
                Filter
              </h1>
              <select
                name=""
                id=""
                className="text-gray-900 text-base font-normal border border-gray-200 outline-none"
                onChange={({ target }) => filterProduct(target.value)}
              >
                <option value="all">ALL</option>
                <option value="men's clothing">MEN</option>
                <option value="women's clothing">WOMEN</option>
                <option value="jewelery">JEWELERY</option>
                <option value="electronics">ELECTRONICS</option>
              </select>
            </div>
            <div className="flex flex-wrap -m-4 gap-2 justify-center">
              {filteredProducts.map((product) => (
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
  );
};

export default Products;
