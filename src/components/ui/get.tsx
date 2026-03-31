const Get = () => {
  return (
    <section
      className="bg-primary flex justify-center items-center pt-10 md:pt-16 xl:pt-16.5"
      id="get"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:items-start">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
          <img
            src="/assets/images/get-image.png"
            alt="FITS Reward Tab"
            className="lg:max-h-141.25 xl:max-w-132.25 lg:max-w-120 md:max-w-90 max-w-75 h-auto object-contain"
          />
        </div>
        {/* Right Side */}
        <div className="bg-black w-full lg:w-[50%] xl:max-w-120.5 rounded-[24px] flex flex-col gap-[30px] px-5 py-10 md:px-10 md:py-12 xl:pt-[55px] xl:p-10">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-gilroy font-extrabold text-h2 xl:text-h1 leading-normal capitalize text-white">
              Get FIT
              <br />
              Earn $FITS
            </h1>
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-white">
              Earn Crypto for Your Exercise Efforts
            </p>
          </div>
          <div className="border border-primary rounded-xl p-5 xl:px-8 xl:py-[40px] flex flex-col gap-[15px] leading-normal">
            <p className="font-[Inter] font-normal text-[16px] leading-[100%] text-white">
              Unlock the potential of your FITS rewards wallet within the app,
              granting you the versatility to securely store, spend, or transfer
              your hard-earned crypto tokens to any preferred third-party
              exchange or cold wallet.
            </p>
            <p className="font-[Inter] font-normal text-[16px] leading-[100%] text-white">
              Your efforts yield tangible rewards, so dive in and make the most
              of your crypto tokens today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get;
