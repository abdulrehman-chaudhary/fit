const Marquee = () => {
  return (
    <div className="w-full bg-[#0A0A0A] overflow-hidden py-8 md:py-8.75 border-b border-[#1A1A1A]">
      <div className="flex w-max animate-marquee text-white">
        <div className="flex shrink-0 px-4 md:px-8">
          <img src="/assets/svgs/marquee-text.svg" alt="Earn Rewards" className="h-10 md:h-16 lg:h-20 w-auto object-contain opacity-60" />
        </div>
        <div className="flex shrink-0 px-4 md:px-8">
          <img src="/assets/svgs/marquee-text.svg" alt="Earn Rewards" className="h-10 md:h-16 lg:h-20 w-auto object-contain opacity-60" />
        </div>
        <div className="flex shrink-0 px-4 md:px-8">
          <img src="/assets/svgs/marquee-text.svg" alt="Earn Rewards" className="h-10 md:h-16 lg:h-20 w-auto object-contain opacity-60" />
        </div>
        <div className="flex shrink-0 px-4 md:px-8">
          <img src="/assets/svgs/marquee-text.svg" alt="Earn Rewards" className="h-10 md:h-16 lg:h-20 w-auto object-contain opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
