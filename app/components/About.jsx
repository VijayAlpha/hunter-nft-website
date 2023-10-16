const About = () => {
  return (
    <section
      className="section-about min-h-screen w-full flex flex-col justify-center items-center relative p-8"
      id="about">
      <div className="w-1/3 rounded-xl bg-[#0B0021] opacity-90 flex flex-col items-center gap-10 p-10 text-center absolute">
        <h2 className="text-4xl">Story</h2>
        <img src="/asserts/images/nft-1.svg" />

        <p>A Haunted Plague NFT Collection: Unearth the Tales of Desolation</p>
        <p className="w-4/5">
          Step into a world shrouded in mystery and despair with 'A Haunted
          Plague'—an exceptional collection of pixel art-based NFTs that weaves
          a haunting narrative of a forsaken village and its afflicted
          inhabitants. Each meticulously crafted artwork within this collection
          serves as a poignant testament to the chilling story that unfolds.
        </p>
      </div>
      <img
        src="/asserts/images/stone-1.svg"
        className="absolute left-0	bottom-0 w-64 ml-6"
      />
      <img
        src="/asserts/images/stone-2.svg"
        className="absolute right-0	bottom-0 w-64 mr-6"
      />
    </section>
  );
};

export default About;
