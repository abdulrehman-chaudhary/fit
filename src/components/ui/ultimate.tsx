const Ultimate = () => {
  return (
    <section
      className="bg-white flex justify-center items-center py-10 md:py-16 xl:pb-0 xl:pt-0"
      id="ultimate"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-[1440px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
          <img
            src="/assets/images/ultimate-image.png"
            alt="FITS Ultimate App"
            className="sm:max-h-[450px] sm:max-w-[450px] lg:max-h-[400px] lg:max-w-[400px] xl:max-h-[633px] xl:max-w-[584px] max-w-[300px] h-auto object-contain"
          />
        </div>
        {/* Right Side */}
        <div className="bg-[#EDBE00] w-full lg:w-[50%] rounded-[18px] flex flex-col gap-[13px] px-5 py-10 md:px-10 md:py-12">
          <div>
            <h1 className="font-gilroy font-[800] text-[28px] leading-none capitalize text-black">
              The Ultimate App
            </h1>
          </div>
          <div className="flex flex-col gap-[25px] leading-normal">
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              FITS, the ultimate free app, ingeniously incentivizes your daily
              activities with cutting-edge digital currency, enabling you to
              indulge in trendy products, make impactful charity contributions or
              create additional income for yourself. Prioritize your health and
              watch as you become a catalyst for societal well-being, amplifying
              productivity and contributing to billions in healthcare savings.
            </p>
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              Your movement holds immense value, and FITS ensures you receive
              your well-deserved share. Download now and seize the opportunity to
              transform your health while earning rewards!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ultimate;
