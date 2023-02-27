import ProductDetails from "@/components/products/ProductDetails";

const getProduct = async (productId) => {
    const data = await fetch('http://localhost:3000/api/products');
    const products = await data.json();
    const fixedProductId = Number(productId);
    const foundProduct = products.find(product => product.id === fixedProductId);
    return foundProduct;
}; 

const DetailsProductPage = async ({params}) => {

    const [productId] = params['productId-productBrand']?.split("-");
    const product = await getProduct(productId);
    return <ProductDetails product={product} /> 
};

export default DetailsProductPage;