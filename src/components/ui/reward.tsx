const Reward = () => {
  return (
    <section
      className="bg-white flex justify-center items-center py-10 md:py-16 xl:pt-[110px] xl:pb-[73px]"
      id="reward"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side */}
        <div className="bg-[#EDBE00] w-full lg:w-[50%] rounded-[18px] flex flex-col gap-[13px] px-5 py-10 md:px-10 md:py-12">
          <div>
            <h1 className="font-gilroy font-extrabold text-h3 leading-none capitalize text-black">
              Quantified Income Rewards
            </h1>
          </div>
          <div className="flex flex-col gap-6.25 leading-normal">
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              Harnessing the expertise of our dedicated team of physicians,
              we've meticulously curated health and fitness protocols aligned
              with the esteemed guidelines of the American College of Sports
              Medicine.
            </p>
            <p className="font-[Inter] font-medium text-[18px] leading-[100%] text-black">
              Our goal? Empowering you to effortlessly adopt a healthier
              lifestyle while reaping the rewards in functional crypto tokens –
              affectionately known as FITS (Functionised Integrative Tokens).
              Dive in now and embark on a journey towards optimal health and
              tangible rewards!
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <img
            src="/assets/images/reward-image.png"
            alt="FITS Reward"
            className="sm:max-h-[450px] sm:max-w-[450px] lg:max-h-[400px] lg:max-w-[400px] xl:max-h-[555px] xl:max-w-[516px] max-w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Reward;
