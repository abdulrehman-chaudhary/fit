const Intro = () => {
  return (
    <section
      className="bg-white flex justify-center items-center py-10 md:py-16 xl:pt-21.75 xl:pb-0"
      id="hero"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side */}
        <div className="bg-[#EDBE00] w-full lg:w-[50%] rounded-[18px] flex flex-col gap-[13px] px-5 py-10 md:px-10 md:py-12 xl:pt-15 xl:pb-12.5">
          <div>
            <h1 className="font-gilroy font-extrabold text-h3 leading-none capitalize text-black">
              Be The Healthiest You've Ever Been
            </h1>
          </div>
          <div className="flex flex-col gap-6.25 leading-normal">
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              Transform your health journey with Functionised Integrative Tokens
              (FITS), the premier app that incentivizes your daily activities
              with cutting-edge digital currency, empowering you to unlock
              exclusive rewards.
            </p>
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              By prioritizing your well-being, you're not just investing in
              yourself – you're fostering a healthier society, boosting
              productivity, and saving billions in healthcare costs.
            </p>
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              Download now and start reaping the rewards of your active
              lifestyle!
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <img
            src="/assets/images/transform-image.png"
            alt="FITS App Transform"
            className="sm:max-h-112.5 sm:max-w-112.5 lg:max-h-100 lg:max-w-100 xl:max-h-141.25 xl:max-w-132.25 max-w-75 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
