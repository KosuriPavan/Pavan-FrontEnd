/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((fetchedItems) => {
        setProductList(fetchedItems);
        console.log(typeof fetchedItems);
        console.log(productList.length);
      })
      .catch((error) => {
        console.error("Error fetching products:", error.message);
      });
    return () => {
      controller.signal;
    };
  }, []);

  return (
    <>
      {productList.length > 0 ? (
        productList.map((mobile) => (
          <Product
            key={mobile.id}
            title={mobile.title}
            desciption={mobile.desciption}
            price={mobile.price}
            rating={mobile.rating}
            stock={mobile.stock}
            brand={mobile.brand}
            thumbnail={mobile.thumbnail}
          />
        ))
      ) : (
        <p>
          Loading Mobile Phones.......
          <br />
          (meanWhile check your internet connection)
        </p>
      )}
    </>
  );
};

export default ProductsList;
