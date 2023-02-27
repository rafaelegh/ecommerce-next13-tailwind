"use client";

import React from "react";
import ProductItem from "./ProductItem";

const ProductsListing = ({ data }) => {
    return (
        <section className="py-10">
            <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Products: </h2>
                <div className=" -mx-4">

                    <main className="px-3 drop-shadow-lg flex justify-center">
                        {data?.map((product) => 
                            <ProductItem key={product.id} product={product} />    
                        )}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default ProductsListing;