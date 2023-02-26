import axios from "axios";
import React from "react";
import ProductsListing from "../components/products/ProductsListing";
import './globals.css'

const getProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/api/products');
  return data;
};

const HomePage = async () => {

  const data = await getProducts();
  
  return <ProductsListing data={data} />
};

export default HomePage;