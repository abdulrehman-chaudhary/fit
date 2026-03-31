const ComingSoon = () => {
  return (
    <section
      className="bg-white flex justify-center items-center py-10 md:py-16 xl:py-22.5 xl:pt-37.5"
      id="coming-soon"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[80%] max-w-360">
        <div className="bg-primary rounded-2xl flex flex-col lg:flex-row items-center lg:items-end overflow-visible relative min-h-70 md:min-h-80">
          {/* Left Side */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-start relative min-h-62.5 md:min-h-35 lg:min-h-80 md:items-end xl:items-stretch md:pt-8 xl:pt-0">
            <img
              src="/assets/images/coming-soon-image.png"
              alt="FITS App Coming Soon"
              className="absolute md:relative xl:absolute bottom-0 lg:left-8 lg:translate-x-0 max-w-70 md:max-w-[320px] lg:max-w-[380px] xl:max-w-120 w-auto object-contain"
            />
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 px-8 py-10 md:px-12 md:py-12 lg:py-14">
            <div>
              <h2 className="font-gilroy font-extrabold text-h2 md:text-[40px] leading-tight text-black">
                Coming Soon
              </h2>
              <p className="font-[Inter] font-medium text-[16px] md:text-[18px] text-black">
                Get fit with $FITS.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-row items-center gap-4">
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/assets/svgs/googleplay.svg"
                  alt="Get it on Google Play"
                  className="h-12.5 w-auto"
                />
              </a>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/assets/svgs/appstore.svg"
                  alt="Download on the App Store"
                  className="h-12.5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
