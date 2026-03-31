import Hero from "../components/ui/hero";
import Marquee from "../components/ui/marquee";
import Intro from "../components/ui/intro";
import Ultimate from "../components/ui/ultimate";
import Reward from "../components/ui/reward";
import Get from "../components/ui/get";
import ComingSoon from "../components/ui/comingSoon";

const Home = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Ultimate />
      <Reward />
      <Marquee />
      <Get />
      <ComingSoon />
    </main>
  );
};

export default Home;
