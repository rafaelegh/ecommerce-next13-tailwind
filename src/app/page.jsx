import React from "react";
import ProductsListing from "../components/products/ProductsListing";

const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
};

const search = (data, searchParams) => {
  const keyword = searchParams?.keyword;
  const filteredData = keyword ? data.filter(product => product.brand.toLowerCase().includes(keyword)) : data;
  return filteredData ? filteredData : data;
}

const HomePage = async ({searchParams}) => {
  const data = await getProducts();

  const searchedData = search(data, searchParams);
  
  return <ProductsListing data={searchedData} />
};

export default HomePage;