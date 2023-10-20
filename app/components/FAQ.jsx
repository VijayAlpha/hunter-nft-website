"use client";
import { useState } from "react";

function FAQItem({ num, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div
      className="faq-qes md:p-8 flex gap-8 items-start justify-between"
      onClick={toggleAnswer}>
      <img
        src={`/asserts/images/number-${num}.svg`}
        className="hidden md:block"
        alt=""
      />
      <div className="w-full">
        <h3 className="text-3xl my-5">{question}</h3>
        {isAnswerVisible && <p className="mb-12">{answer}</p>}
      </div>
      <div className="hidden md:block">
        {isAnswerVisible ? (
          <img src="/asserts/images/_xmark.svg" alt="" />
        ) : (
          <img src="/asserts/images/_plus.svg" alt="" />
        )}
      </div>
    </div>
  );
}

const FAQ = () => {
  return (
    <section className="container  flex flex-col items-center p-10">
      <img src="/asserts/images/faq-name.svg" alt="" />
      <div className="max-w-6xl my-12  divide-y-2 divide-gray-600 w-full">
        <FAQItem
          num="1"
          question="What is the Haunted Plague NFT project?"
          answer="Haunted Plague NFT project is a unique collection of digital assets represented as Non-Fungible Tokens (NFTs). Each NFT in this collection is inspired by haunted and plague-themed art and lore, creating a captivating and eerie virtual world for collectors."
        />
        <FAQItem
          num="2"
          question="Are there any benefits for early adopters or loyal collectors?"
          answer="Yes, we often have special rewards and benefits for early adopters and loyal collectors. Keep an eye on our announcements for details about exclusive events, giveaway, and other perks."
        />
        <FAQItem
          num="3"
          question="What makes Haunted Plague NFTs special?"
          answer="Our NFTs are meticulously crafted by talented artists, each telling a unique story within the haunted plague theme. Owning a Haunted Plague NFT means you're not just buying art; you're becoming part of a community of like-minded enthusiasts."
        />
        <FAQItem
          num="4"
          question="Is there a roadmap for upcoming releases and events related to Haunted Plague NFTs?"
          answer="Yes, we have a detailed roadmap outlining upcoming releases, collaborations, and community events related to the Haunted Plague NFT project.
          "
        />
      </div>
    </section>
  );
};

export default FAQ;
