"use client";

import Image from "next/image";
import React from "react";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useStockPrice(sku) {
    const { data, error, isLoading } = useSWR(`/api/stock-price/${sku}`, fetcher, { refreshInterval: 5000 })

    return {
        stockPrice: data,
        isLoading,
        isError: error
    }
}

const ProductDetails = ({ product }) => {
    
    const [sku, setSku] = React.useState(product.skus[0].code);
    const { stockPrice, isLoading, isError } = useStockPrice(sku);

    const imgRef = React.useRef(null);

    const handleOnChange = (e) => {
        setSku(e.target.value);
    }
    const fixedPrice = stockPrice?.price ? `${Math.trunc(stockPrice.price/100)},${stockPrice.price%100}` : '';
    const inStock = stockPrice?.stock >= 1;

    return (
        <>
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                        <aside className="flex justify-center">
                            <div className="border relative border-gray-200 shadow-sm p-3 text-center rounded mb-5"
                                style={{
                                    width: 300,
                                    height: 500
                                }}                            
                            >
                                <Image
                                    ref={imgRef}
                                    className="object-contain inline-block"
                                    src={
                                        product?.image
                                            ? `/images${product?.image}`
                                            : "/images/default_product.png"
                                    }
                                    alt="Product title"
                                    fill
                                />
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
                                <select className="border border-grey1 w-1/3 rounded-md bg-white1" name="" id="" onChange={handleOnChange}>
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
                                <button className="px-4 py-2 inline-block text-white bg-red1 border border-transparent rounded-md hover:bg-red-500">
                                    <i className="fa fa-shopping-cart mr-2"></i>
                                    Add to cart
                                </button>
                            </div>

                            <ul className="mb-5">
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium inline-block mr-4">Stock: {stockPrice?.stock}</b>
                                    {stockPrice?.stock && (inStock ? (
                                        <span className="text-green-500">In Stock</span>
                                    ) : (
                                        <span className="text-red-500">Out of Stock</span>
                                    ))}
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