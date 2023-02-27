

import products from "@/data/products";

export async function GET(request, {params}) {
    const foundProduct = products.filter(product => product.brand.includes(params.keyword));
    return Response.json(foundProduct);
}