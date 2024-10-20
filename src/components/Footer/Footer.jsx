import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    name: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "50%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company info */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-semibold font-cursive tracking-widest"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              {""} Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your
              Perfect Espresso Escape
            </p>
            <a
              href="#"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our Youtube Channel
            </a>
          </div>

          {/*Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul>
                {FooterLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="py-1">
                      <a href={link}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul>
                {FooterLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="py-1">
                      <a href={link}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Third col links */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">1234 Main Street, New York</p>
                <p>Phone: 123-456-7890</p>
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="text-3xl  inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl  inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl  inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
