const About = () => {
  return (
    <section
      className="section-about min-h-screen w-full flex flex-col justify-center items-center relative p-8"
      id="about">
      <div className="max-w-xl max-h-[90vh] my-10 rounded-xl bg-[#0B0021] opacity-90 flex flex-col items-center gap-10 p-10 text-center absolute overflow-y-auto">
        <img src="/asserts/images/name-story.svg" />
        <img src="/asserts/images/nft-1.svg" />

        <p>A Haunted Plague NFT Collection: Unearth the Tales of Desolation</p>
        <p className="">
          Story - "A Haunted Plague NFT Collection: Unearth the Tales of
          DesolationStep into a world shrouded in mystery and despair with 'A
          Haunted Plague'—an exceptional collection of pixel art-based NFTs that
          weaves a haunting narrative of a forsaken village and its afflicted
          inhabitants.
        </p>
        <p>
          Each meticulously crafted artwork within this collection serves as a
          poignant testament to the chilling story that unfolds.In this spectral
          realm, you will bear witness to the harrowing consequences of a
          perilous plague that descended upon the unsuspecting village, leaving
          nothing but eerie remnants of its once-vibrant life. With each stroke
          of pixelated brilliance, these NFTs capture the essence of a world
          irrevocably transformed by darkness and suffering.
        </p>
        <p>
          Every NFT in 'A Haunted Plague' is a unique masterpiece, a portal to a
          bygone era where the afflicted villagers grappled with their fate and
          the malevolent forces that enveloped their lives. These pixelated
          masterpieces invite you to explore the intricacies of this chilling
          narrative, from the haunted streets to the ghostly figures that linger
          in the shadows.
        </p>
        <p>
          As you immerse yourself in this haunting journey through 'A Haunted
          Plague,' you'll discover not just art but a living, breathing story,
          each NFT acting as a window into a world where dread and despair are
          eternally entwined. Collectors and enthusiasts alike will be drawn to
          the eerie beauty and evocative storytelling that define this
          remarkable NFT collection.Experience the haunted history, capture the
          essence of despair, and own a piece of this ghostly saga with 'A
          Haunted Plague'—where pixel art and narrative merge to create an NFT
          collection like no other'
        </p>
      </div>
      <img
        src="/asserts/images/stone-1.svg"
        className="hidden md:block w-32 lg:w-64 absolute left-0 bottom-0  ml-6"
      />
      <img
        src="/asserts/images/stone-2.svg"
        className="hidden md:block w-32 lg:w-64 absolute right-0	bottom-0 mr-6"
      />
    </section>
  );
};

export default About;
