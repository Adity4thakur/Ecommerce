import { useState } from "react";
import Banner from "../assets/banner.jpg";
// images is coming from unsplash.com

// images ka fault hai
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

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

export default function Home() {
  const images = [Banner1, Banner2, Banner3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // logic for previous button
  const goToPreviousBtn = () => {
    setCurrentIndex((previndex) =>
      previndex === 0 ? images.length - 1 : previndex - 1
    );
  };

  const goToNextBtn = () => {
    setCurrentIndex((previndex) => (previndex + 1) % images.length);
  };

  return (
    // section 1
    <div className="bg-white mb-5 pb-5">
      {/* for adjusting padding margin we will remove the class */}
      {/* section 1 */}
      <div className="mb-5 pb-5">
        {/* remove the sm:rounded-3xl */}
        {/* code is for hilight and gives pink color svg */}
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            {/* changing the names of home page */}
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Reveal Your True Magnificence.
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Stay updated with the latest trends in technology, fashion, and
              lifestyle to gain valuable insights and make informed decisions in
              a rapidly changing world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Show Now
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                know more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* New div for image */}
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div> */}
          <div className="md:py-5"></div>
          <div>
            <img
              src={Banner}
              alt="banner image"
              width={1824}
              height={1080}
              className=" md:hidden lg:block  "
              //   absolute right-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10
            />
          </div>
        </div>
      </div>

      {/* section 2 Category & Product */}
      <div className="mb-5 pb-5">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className=" pb-5 mb-5 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            New Arrivals
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

      {/* section 3  */}
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-indigo-800"
                >
                  View Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="mb-5 pb-5">
        {/* w-full max-w-l mx-auto    mx-5 pb-5*/}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            {/* w-1/2 mx-auto */}
            <img src={images[currentIndex]} alt="banners" className="w-full" />
            {/* previous  button*/}
            <button
              onClick={goToPreviousBtn}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 text-white p-4"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>

            {/* next   button */}
            <button
              onClick={goToNextBtn}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white p-4"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Example() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Summer styles are finally here
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//               This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
//               if you live or die.
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href="#"
//                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//               >
//                 Shop Collection
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//   export default function Example() {
//     return (
//         // first div
//       <div className="bg-white">
//         {/* second dev */}
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (
//               <div key={product.id} className="group relative">
//                 <img
//                   alt={product.imageAlt}
//                   src={product.imageSrc}
//                   className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//                 />
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <a href={product.href}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
