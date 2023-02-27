import React from "react";
import ProductsListing from "../components/products/ProductsListing";

const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
};

const HomePage = async () => {

  const data = await getProducts();
  console.log(data[4]);
  
  return <ProductsListing data={data} />
};

export default HomePage;