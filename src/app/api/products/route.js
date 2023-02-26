import products from "@/data/products";

export async function GET(request) {
    return Response.json(products);
}