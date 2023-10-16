import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col section-hero">
      <Nav />
      <div className="flex-1 flex flex-col justify-around items-center w-1/2">
        <img src="/asserts/images/hero-logo.svg" alt="Haunted Plague" />
        <div className="text-center">
          <h1 className="text-3xl mb-2">SEASON 01</h1>
          <p className="text-center text-lg">
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
