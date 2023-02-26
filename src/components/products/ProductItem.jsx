import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ brand, name }) => {
    return (
        <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
            <div className="flex flex-col md:flex-row">
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
                                brand?.image
                                    ? `/images${brand?.image}`
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
                            href={`/`}
                            className="hover:text-blue-600"
                        >
                            {name}
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
                            {brand?.information.substring(0, 150)}...
                        </p>
                    </div>
                </div>
                <div className="flex md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200 place-content-center">
                    <div className="p-5">
                        <span className="text-xl font-semibold text-black">
                            $precio
                        </span>

                        <p className="text-green-500">Free Shipping</p>
                        <div className="my-3">
                            <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                                {" "}
                                Add to Cart{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;