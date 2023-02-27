import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";

const getProduct = async (productId) => {
    const {data} = await axios.get('http://localhost:3000/api/products');
    const fixedProductId = Number(productId);
    const foundProduct = data.find(product => product.id === fixedProductId);
    return foundProduct;
}; 

const DetailsProductPage = async ({params}) => {

    console.log(params);
    const [productId, productBrand] = params['productId-productBrand']?.split("-");
    console.log(productId, productBrand)
    const product = await getProduct(productId);
    return <ProductDetails product={product} /> 
};

export default DetailsProductPage;