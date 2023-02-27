import stockPrice from "@/data/stock-price";


export async function GET(request, { params }) {
    const sku = params.sku;
    const foundStockPrice = stockPrice[sku]
    if (foundStockPrice) {
        return Response.json(foundStockPrice)
    }
    return new Response ('Product does not exist');
}