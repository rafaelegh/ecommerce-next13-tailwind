"use client";

import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetails = ({ product }) => {
    
    const [sku, setSku] = useState('');
    const [stockPrice, setStockPrice] = useState({});

    const imgRef = useRef(null);

    const setImgPreview = (url) => {
        imgRef.current.src = url;
    };

    const inStock = stockPrice?.stock >= 1;
    //const [sku, setSku] = useState(product.sku[0]?.code);
    console.log('stock: ', stockPrice);
    console.log('sku: ', sku);

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setSku(e.target.value);
    }
    const fixedPrice = stockPrice ? `${Math.trunc(stockPrice.price/100)},${stockPrice.price%100}` : '';



    useEffect(() => {
        const getStockPrice = async (sku) => {
            const {data}  = await axios.get(`http://localhost:3000/api/stock-price/${sku}`);
            setStockPrice(data);
        }
        console.log('product: ', product)

        if(product) {
            const code = sku ? sku : product.skus[0].code;
            getStockPrice(code);
        }
    }, [product, sku])

    console.log(stockPrice);

    return (
        <>
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                        <aside>
                            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                                <img
                                    ref={imgRef}
                                    className="object-cover inline-block"
                                    src={
                                        product?.image
                                            ? `/images${product?.image}`
                                            : "/images/default_product.png"
                                    }
                                    alt="Product title"
                                    width="340"
                                    height="340"
                                />
                            </div>
                            <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                                {product?.images?.map((img) => (
                                    <a
                                        className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                                        onClick={() => setImgPreview(img?.url)}
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src={img.url}
                                            alt="Product title"
                                            width="500"
                                            height="500"
                                        />
                                    </a>
                                ))}
                            </div>
                        </aside>
                        <main>
                            <h2 className="font-semibold text-2xl mb-4">{product?.brand}</h2>

                            <p><b>Style: </b>{product?.style}</p>
                            <p><b>Substyle: </b>{product?.substyle}</p>
                            <p><b>Abv: </b>{product?.abv}</p>
                            <p><b>Origin: </b>{product?.origin}</p>
                            <div className="flex">
                                <p className="font-bold mr-4">Size: </p>
                                <select className="text-red" name="" id="" onChange={handleOnChange}>
                                    {
                                        product?.skus?.map(sku => {
                                            return <option key={sku.code} value={sku.code}>{sku.name}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <p className="font-bold">Information: </p>
                            <p className="mb-4 text-gray-500">{product?.information}</p>

                            <div className="flex flex-wrap items-center gap-2 mb-5">
                                <p className="font-semibold text-3xl mr-4"> ${fixedPrice}</p>
                                <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                                    <i className="fa fa-shopping-cart mr-2"></i>
                                    Add to cart
                                </button>
                            </div>

                            <ul className="mb-5">
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium inline-block mr-4">Stock: {stockPrice.stock}</b>
                                    {inStock ? (
                                        <span className="text-green-500">In Stock</span>
                                    ) : (
                                        <span className="text-red-500">Out of Stock</span>
                                    )}
                                </li>
                            </ul>
                        </main>
                    </div>

                    {/* <NewReview /> */}
                    <hr />

                    <div className="font-semibold">
                        <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                            Other Customers Reviews
                        </h1>
                        {/* <Reviews /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;