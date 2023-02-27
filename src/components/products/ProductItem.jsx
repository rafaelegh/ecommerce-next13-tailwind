import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ product }) => {

    const fixedBrandName = product.brand.toLowerCase().split(" ").join("-");

    return (
        <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
            <div className="flex flex-col justify-center md:flex-row">
                <div className="md:w-1/4 flex p-3 justify-center">
                    <div
                        style={{
                            width: "75px",
                            height: "150px",
                            position: "relative",
                        }}
                    >
                        <Image
                            src={
                                product?.image
                                    ? `/images${product?.image}`
                                    : "/images/default_product.png"
                            }
                            alt="product anme"
                            fill
                        />
                    </div>
                </div>
                <div className="md:w-2/4">
                    <div className="p-4">
                        <Link
                            href={`/${product.id}-${fixedBrandName}`}
                            className="hover:text-blue-600"
                        >
                            {product.brand}
                        </Link>
                        <div className="flex flex-wrap items-center space-x-2 mb-2">
                            <div className="ratings">
                                <div className="my-1">

                                </div>
                            </div>
                            <b className="text-gray-300">•</b>
                            <span className="ml-1 text-yellow-500"></span>
                        </div>
                        <p className="text-gray-500 mb-2">
                            {product?.information.substring(0, 150)}...
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;