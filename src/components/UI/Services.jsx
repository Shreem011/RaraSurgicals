import React from "react";
import pharmacy from "../../assets/pharmacy.jpg";
import laboratory from "../../assets/laboratory.png";
import retailer from "../../assets/retailer.png";
import educational from "../../assets/educational.jpg";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Our Services
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Our supplies are available at our website. We have become the
            trusted supplier for thousands of customers. Give us chance to serve
            you as well.
          </p>
        </div>

        <div className="flex flex-col  justify-center sm:py-12">
          <div classname="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*==========vertical line============*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              {/*==========left card==========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                    group-hover:font-[600] text-2xl"
                        >
                          Pharmacy Supplies
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Pharmaceutical Products are available at the
                          reasonable price.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={pharmacy} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*=========rightcard============*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                    group-hover:font-[600] text-2xl"
                        >
                          Laboratory Supplies
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Laboratory Supplies have been provided by various
                          companies and is the trusted source.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={laboratory} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*==========left card==========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                    group-hover:font-[600] text-2xl"
                        >
                          Retailer Supplies
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          We also do supply the retailer at our most affordable
                          prices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={retailer} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*=========rightcard============*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                    group-hover:font-[600] text-2xl"
                        >
                          Educational Supplies
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Tremendous quantities of educational supplies help us
                          provide better services to the same.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={educational} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
