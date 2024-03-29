const Footer = () => {
  return (
    <>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsHmy02Dsfdyh-F3Ant21faaOwp8CQsfGxYp8fBdwnI0HAFg/viewform">
        {" "}
        <img src="/asserts/images/name-contact.svg" alt="" />
      </a>
      <footer className="section-footer flex flex-col items-center w-full relative min-h-screen">
        <div className="flex-1 flex flex-col justify-around items-center absolute bottom-0">
          <img
            src="/asserts/images/hero-logo.svg"
            alt="Haunted Plague"
            className="w-56"
          />
          <div className="text-center [&>*]:m-6 md:[&>*]:m-10 ">
            <p className="text-center text-lg max-w-md">
              Embrace the darkness, own the mystery.
              <br></br>
              Haunted Plague NFTs – where legends become tokens
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://twitter.com/hauntedplague">
                {" "}
                <img
                  src="/asserts/images/icon-x.svg"
                  alt=""
                  className="cursor-pointer w-8"
                />
              </a>
              <a href="https://discord.com/invite/JUcKQGGh84">
                <img
                  src="/asserts/images/icon-discord.svg"
                  className="cursor-pointer w-8"
                />
              </a>
            </div>
            <p className="text-center">
              © 2023 Haunted Plague, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
