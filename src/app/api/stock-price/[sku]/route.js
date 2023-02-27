import stockPrice from "@/data/stock-price";

let mutableStockPrice = stockPrice;

export async function GET(request, { params }) {
    const sku = params.sku;
    const foundStockPrice = mutableStockPrice[sku]
    if (foundStockPrice) {
        return Response.json(foundStockPrice)
    }
    return new Response ('Product does not exist');
}

export async function POST(request, {params}) {
    const body = await request.json();
    const sku = params.sku;
    mutableStockPrice[sku] = body;
    return Response.json({ sku: mutableStockPrice[sku] });
}