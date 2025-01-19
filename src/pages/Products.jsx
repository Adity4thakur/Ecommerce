// import product1 from "../assets/products/product1.jpg";

// import Category from "./Category"

const products = [
  {
    id: 1,
    name: "Basic Tee",
    shortdiscription:
      "Black plain t-shirt avlb in three different sizes l m xl",
    category: "T-shirt",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "180₹",
    discount: "10%",
    orignalPrice: "200₹",
  },
  {
    id: 2,
    name: "Spacious Totebag for Women",
    shortdiscription: "Lather in metarial but brown in color hand bag for you!",
    category: "bag",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1671639334426-e27d616492f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "brown bag",
    price: "5000₹",
    discount: "10%",
    orignalPrice: "4500₹",
  }, 
  {
    id: 3,
    name: "Spacious Totebag for Women",
    shortdiscription: "Lather in metarial but brown in color hand bag for you!",
    category: "bag",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1671639334426-e27d616492f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "brown bag",
    price: "5000₹",
    discount: "10%",
    orignalPrice: "4500₹",
  }, 
  {
    id: 4,
    name: "Spacious Totebag for Women",
    shortdiscription: "Lather in metarial but brown in color hand bag for you!",
    category: "bag",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1671639334426-e27d616492f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "brown bag",
    price: "5000₹",
    discount: "10%",
    orignalPrice: "4500₹",
  }, 

  // More products...
];

export default function Products() {
  return (
    <>
      <div className="my-5 py-5 bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className=" mb-5 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            OUR PRODUCTS
          </h2>
          {/* 1 div is for image second is for name third is for discription 4th is for price */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border border-gray-900 p-3"
              >
                <img
                  alt="Product"
                  src={product.imageSrc}
                  className="aspect-square w-full  rounded-xl bg-gray-200  lg:h-80"
                />
                {/* product name  */}
                <div className="my-2">
                  <div className=" flex justify-between">
                    <h3 className="text-1 font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <div>
                      <i className="fa-regular fa-heart fa-xl text-gray-900"></i>
                      {/* <i className="fa-solid fa-heart fa-xl text-gray-900"></i> */}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-800">
                    {product.shortdiscription}
                  </p>
                </div>
                {/* price */}
                <div className="mt-4 flex justify-between">
                  <div className=" flex justify-between">
                    <div>
                      <p className="text-2xl font-medium text-gray-900 ">
                        {product.price}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between ">
                      <p className="text-xl font-medium text-gray-900 mx-2">
                        {product.discount}
                      </p>
                      {/* orignal price */}
                      <p className="text-xl font-medium text-red-500 ">
                        <strike> {product.orignalPrice} </strike>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="text-white bg-gray-900 py-1 px-2">
                      Cart Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-5 my-5"></div>
    </>
  );
}
