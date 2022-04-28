import React from "react";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";
import "./style.css";

const HomePage = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((p) => p.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((p) => p.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((p) => p.ratings >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  const renderLists = transformProducts().map((prod) => (
    <SingleProduct prod={prod} key={prod.id} />
  ));
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">{renderLists}</div>
    </div>
  );
};

export default HomePage;
