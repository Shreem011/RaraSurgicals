import React from "react";
import heroimg from "../../assets/heroimg.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*=============hero left content============*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[22px]"
            >
              Welcome to <br />
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
            sm:leading-[46px] mt-5"
            >
              RARA SURGICALS <br />
              Single Place for All your Supplies
            </h1>
            <h5
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[14px] mt-5"
            >
              We are a group of people who are passionate about the
              sustainability of the RARA SURGICALS serving since 2078 B.S.
            </h5>
          </div>
          {/*=============hero left end============*/}

          {/*=============hero img============*/}
          <div className="basis-1/3 mt-10 sm:mt-10">
            <figure className="flex items-center justify-center">
              \
              <img src={heroimg} alt=" " />
            </figure>
          </div>

          {/*=============hero img end============*/}

          {/*=============hero content right============*/}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={500} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Product Availability
              </h4>
            </div>
          </div>

          {/*=============hero content right end============*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
