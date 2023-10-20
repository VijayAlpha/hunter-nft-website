const Collections = () => {
  return (
    <section className="section-collection bg-[#0E080A] flex flex-col items-center" id="collections">
      <div className="max-w-lg text-center my-10 mt-20 flex flex-col items-center">
        <img src="/asserts/images/Collections.svg" alt="collection" className=""/>
        <p className="text-lg p-5"> 
          Own the darkness, embrace the mystery, and become a custodian of
          ghostly history with the Haunted Plague NFT Collection.
        </p>
      </div>

      <div className="collection-box">
        <div className="collection-box-1 flex gap-4 overflow-x-scroll ">
          <img
            src="/asserts/nft/1.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/2.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/3.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/4.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/5.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/6.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
        </div>
        <div className="collection-box-2 flex gap-4  mt-4  overflow-x-scroll">
          <img
            src="/asserts/nft/7.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/9.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/10.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/11.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/12.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
          <img
            src="/asserts/nft/13.png"
            alt="hunter nft pics"
            className="w-64 h-64"
          />
        </div>
      </div>

      <div className="more-box w-full p-20 flex flex-col items-center justify-evenly">
        <img src="/asserts/images/more.svg" alt="" />
        <div className="mt-28 mb-20 flex flex-col md:flex-row justify-around w-full gap-6">
          <img src="/asserts/images/more-1.svg" alt="" />
          <img src="/asserts/images/more-2.svg" alt="" />
          <img src="/asserts/images/more-3.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
