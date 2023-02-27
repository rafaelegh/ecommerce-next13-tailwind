This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
cd ecommerce-next13-tailwind
npm install
npm run dev

```

Routes: 
  - /                         : Product list page
  - /[productID-productBrand] : Product detail page
  
  - Product detail page updates every 5 seconds
  - search bar for products
  - API endpoints:
    /products 
      http methods: GET
    /stock-price/:sku
      http methods: GET, POST
      
     you cand update only by memory the stock-price endpoint using a post with a request like this:
     
     example request:
     http://localhost:3000/api/stock-price/10167
     
     body:
     {
        "stock": "130", 
        "price": "2865"
      }
      
      with this you can test the update of the product detail page
