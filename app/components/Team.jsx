import React from "react";

const Team = () => {
  return (
    <section className="section-team w-full py-24 p-8 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-lg">
        <img src="/asserts/images/our-team.svg" />
        <p className="text-lg p-5 text-center">
          Meet the Creators of the Haunted Plague NFT <br /> Collection: A
          Fusion of Artistry and Spookiness
        </p>
      </div>
      <div className="pt-10 flex flex-col md:flex-row gap-16">
        <a href="#">
          <img src="/asserts/images/team-1.svg" alt="" />
        </a>
        <a href="#">
          <img src="/asserts/images/team-2.svg" alt="" />
        </a>
        <a href="#">
          <img src="/asserts/images/team-3.svg" alt="" />
        </a>
        <a href="#">
          <img src="/asserts/images/team-4.svg" alt="" />
        </a>

      </div>
    </section>
  );
};

export default Team;
