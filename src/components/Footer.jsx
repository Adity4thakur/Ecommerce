// import footerImg from "../assets/images/logo9.png"
// import footerImg from '../assets/images/logo9.png';

import footerImage from "../assets/logo1.webp";


// navigation
const navigation1 = [
  { name: "Home", href: "#", current: false },
  { name: "Category", href: "#", current: false },
  { name: "Products", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const navigation2 = [
  { name: "Profile", href: "#", current: false },
  { name: "Orders", href: "#", current: false },
  { name: "Address", href: "#", current: false },
  { name: "Signup", href: "#", current: false },
  { name: "LogOut", href: "#", current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className=" text-white">
            <div className="space-y-2">
              <h1 className="text-white text-xl font-bold">ADITYA</h1>
              <div>
                <h1 className="text-left">
                  <u>
                    <b>Address</b>{" "}
                  </u>
                  :
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempora, ab.NewYork
                  </p>
                </h1>
                <h1 className="text-left">
                  <u>
                    <b>Email</b>
                  </u>
                  <p>ADity4@gmailcom</p>
                </h1>
                <h1 className="text-left">
                  <u>
                    <b>To connect</b>
                  </u>
                  :<p>9284896832</p>
                </h1>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <i className="fa-brands fa-youtube fa-2xl my-5 py-3"></i>
                <i className="fa-brands fa-instagram fa-2xl my-5 py-3"></i>
                <i className="fa-brands fa-x-twitter fa-2xl my-5 py-3"></i>
                <i className="fa-brands fa-github fa-2xl my-5 py-3"></i>
              </div>
            </div>
          </div>
          {/* Navigation1 */}
          <div className="text-center">
            <ul className="space-y-2">
              <li className="text-l text-white font-bold">Quick Links</li>
              {navigation1.map((item) => (
                <li
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Navigation2 */}
          <div className="text-center">
            <ul className="space-y-2">
              <li className="text-l text-white font-bold">Quick Links</li>
              {navigation2.map((item) => (
                <li
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* 4 image */}
          <div className="text-center">
            <div className="space-y-2">
              {
                <img
                  src={footerImage}
                  alt="Footer"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
