import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ product }) => {

    const fixedBrandName = product.brand.toLowerCase().split(" ").join("-");

    return (
        <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 flex-1 mr-8">
            <div className="flex flex-col items-center">
                <div className="md:w-1/4 flex justify-center mt-4">
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
                            className="object-contain"
                            alt="product anme"
                            fill
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center mb-4">
                    <div className="p-4">
                        <Link
                            href={`/${product.id}-${fixedBrandName}`}
                            className="bg-red1 py-3 px-4 text-white rounded-xl hover:bg-red-500 capitalize font-extrabold"
                        >
                            {product.brand}
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;