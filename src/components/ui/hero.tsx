
const Hero = () => {
  return (
    <section
      className="relative bg-black flex justify-center py-10 md:py-16 xl:py-24 overflow-hidden"
      id="hero"
    >
      {/* Top Yellow Shade */}
      <img
        src="/assets/images/yellow-ellipse.png"
        alt="Shade"
        className="absolute top-0 left-1/2 md:w-full pointer-events-none z-99 transform -translate-y-1/6 -translate-x-1/2"
      />

      <div className="relative z-20 w-[95%] md:w-[88%] lg:w-[85%] xl:w-[67%] max-w-360 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 pt-10 md:pt-16 lg:pt-0 pb-10 md:pb-0">
        {/* Left Side */}
        <div className="w-full lg:w-[65%] flex flex-col gap-5 md:gap-6 lg:pb-10">
          <div>
            <h3 className="font-gilroy font-bold text-[#F5C518] text-xl md:text-h4">
              Your Fitness Companion
            </h3>
            <h1 className="font-gilroy font-extrabold text-[36px] leading-11 md:text-h1 md:leading-14 xl:text-h1 xl:leading-13.5 capitalize text-white">
              Transform Your <span className="text-[#F5C518]">Exercise</span>
              <br className="hidden md:block" />
              Routine Into <span className="text-[#F5C518]">Crypto Rewards</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 leading-normal">
            <p className="font-[Inter] font-normal text-[16px] md:text-small-body leading-[140%] text-white max-w-162.5">
              Welcome to an unparalleled personal fitness revolution, where each
              stride, every repetition, and even the smallest bead of perspiration
              is met with rewarding incentives. Embark on a transformative fitness
              journey and convert your daily exercise regimen into a lucrative
              pathway to optimal health and abundant wealth.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-gilroy font-normal text-sm md:text-small-body text-white">
              Coming soon on
            </p>
            <div className="flex flex-row items-center gap-4">
              <a href="#" className="hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="/assets/svgs/googleplay.svg"
                  alt="Get it on Google Play"
                  className="h-10 md:h-16 lg:w-52.75"
                />
              </a>
              <a href="#" className="hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="/assets/svgs/appstore.svg"
                  alt="Download on the App Store"
                  className="h-10 md:h-16 lg:w-52.75"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Right Side - Transform Image */}
        <div className="w-full lg:hidden flex justify-center relative z-5">
          <img
            src="/assets/images/fit-hero-image.png"
            alt="FITS App Runner"
            className="w-full max-w-100 md:max-w-112.5 h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Right Side - Transform Image */}
      <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-5 pointer-events-none justify-end">
        <img
          src="/assets/images/fit-hero-image.png"
          alt="FITS App Runner"
          className=" max-w-162.5 xl:max-w-156 h-auto object-contain object-right pointer-events-auto"
        />
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 md:bottom-4 left-0 w-full flex justify-center overflow-hidden z-10 pointer-events-none px-4">
        <img
          src="/assets/svgs/earn-rewards.svg"
          alt="Earn Rewards"
          className="w-[150%] md:w-full min-w-5 max-w-358.75 object-cover md:object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
