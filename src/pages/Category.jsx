// import React from 'react'

const products = [
  {
    id: 1,
    name: "Oversized tshirt",

    imageSrc:
      "https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Denims",
    imageSrc:
      "https://images.unsplash.com/photo-1542574621-e088a4464f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVuaW1zfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Womens fashion",
    imageSrc:
      "https://images.unsplash.com/photo-1552256028-71eb9a7ff27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Beach-Shirt Collection",
    imageSrc:
      "https://images.unsplash.com/photo-1471575266009-b52cd3a488c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0JTIwaW1hZ2VzfGVufDB8fDB8fHww",
  },
  //   {
  //     id: 1,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },

  // More products...
];

export default function Category() {
  return (
    <>
      {/* section 1 */}
      <div className="my-5 py-5">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className=" pb-5 mb-5 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Our Categories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative ">
                <img
                  alt="pic"
                  src={product.imageSrc}
                  className="aspect-square w-full  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4  px-2 pb-3">
                  <h1 className=" text-center text-l font-bold text-black">
                    {product.name}
                  </h1>

                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
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

// export default function Category(){
//     re1
// }
