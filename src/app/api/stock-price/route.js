import stockPrice from "@/data/stock-price";

export async function GET(request) {
    return Response.json(stockPrice);
}