import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*==============logo============*/}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center
            justify-center"
            >
              RS
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">RARA</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Joint Surgicals
              </p>
            </div>
          </div>
          {/*==============end of logo============*/}
          {/*==============menu start============*/}
          <div className="menu">
            <ul className="flex items-center gap-[20px]">
              <li>
                <a
                  href="#about"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/*==============menu end============*/}

          {/*==============menu right============*/}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300"
            >
              <i class="ri-phone-line">01-4356025</i>
            </button>

            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>

          {/*==============menu right end============*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
