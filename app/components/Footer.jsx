const Footer = () => {
  return (
    <footer className="section-footer flex flex-col items-center w-full relative min-h-screen">
      <div className="flex-1 flex flex-col justify-around items-center absolute bottom-0">
        <img
          src="/asserts/images/hero-logo.svg"
          alt="Haunted Plague"
          className="w-1/2"
        />
        <div className="text-center [&>*]:m-10 ">
          <p className="text-center text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur. Sed cras integer diam ac
            morbi adipiscing sodales
          </p>
          <div className="flex gap-4 justify-center">
            <img
              src="/asserts/images/icon-x.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              src="/asserts/images/icon-discord.svg"
              className="cursor-pointer"
            />
          </div>
          <p className="text-center">
            © 2023 Haunted Plague, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
