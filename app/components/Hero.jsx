import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col section-hero">
      <Nav />
      <div className="flex-1 flex flex-col justify-around items-center p-5 max-w-lg">
        <img src="/asserts/images/hero-logo.svg" alt="Haunted Plague" />
        <div className="text-center flex flex-col items-center">
          <img src="/asserts/images/season-01.svg" className="mb-8 lg:mb-2"/>
          <p className="text-center lg:text-lg">
            The Haunted Plague NFT Collection is a spine-tingling digital art
            series featuring 888 unique, eerie, and hauntingly beautiful NFTs.
            Each piece is meticulously crafted to evoke a sense of mystery and
            darkness, drawing inspiration from the supernatural and the macabre.
            Explore this chilling collection to own a piece of digital art that
            will send shivers down your spine.
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="/asserts/images/group-of-hunters.svg"
          alt="group-of-hunters"
          className="h-52 m-2"
        />
      </div>
    </div>
  );
};

export default Hero;
