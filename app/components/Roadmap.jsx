const Roadmap = () => {
  return (
    <section className="flex flex-col items-center bg-[#0E080A]">
      <img src="/asserts/images/name-roadmap.svg" className="mb-10" />

      <div className="relative flex items-center justify-center">
        <img src="/asserts/images/name-coming-soon.svg" className="absolute" />
        <img src="/asserts/images/roadmap.png" className="w-screen " />
      </div>
    </section>
  );
};

export default Roadmap;
