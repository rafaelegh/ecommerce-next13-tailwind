export async function GET(request, { params }) {
    const sku = params.sku;
    return new Response(sku)
}