import React, { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.addEventListener("scroll", stickyHeaderFunc);
  }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offsetTop;

  //   window.scrollTo({
  //     top: location - 80,
  //     behavior: "smooth",
  //     left: 0,
  //   });
  // };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
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
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-[20px]">
              <li>
                <a
                  // onClick={handleClick}
                  href="#about"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  // onClick={handleClick}
                  href="#services"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  // onClick={handleClick}
                  href="#portfolio"
                  className="text-[14px] font-bold text-gray[800px] "
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  // onClick={handleClick}
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
              <i href="tel:01-4356025" class="ri-phone-line">
                01-4356025
              </i>
            </button>
            {/* <button
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300"
            >
              <i class="ri-mail-fill">abc@gmail.com</i>
            </button> */}

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
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
