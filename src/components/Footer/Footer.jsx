import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*===========footer top ========*/}
      <div className="container">
        <div className="sm: flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Need your Supplies ?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line">rarajointsurgical23@gmail.com</i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            {/* <p className="text-gray-300 leading-7 mt-4 mr-4 text-[10px]">
              lorem ipsum
              kdckjdnskjcnskjncksndcnskjcnksjnckjsndcjdhfkjdskjsndcnscjsnck
            </p> */}

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-0">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow us On :
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#facebook"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul className="flex items-center justify-center gap-10 mt-10]">
            <li>
              <a href="#about" className="text-primaryColor font-[600]">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-primaryColor font-[600] ">
                Services
              </a>
            </li>
            <li>
              <a href="#products" className="text-primaryColor font-[600] ">
                Products
              </a>
            </li>

            <li>
              <a href="#contact" className="text-primaryColor font-[600] ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*===========footer top end ========*/}
    </footer>
  );
};

export default Footer;
