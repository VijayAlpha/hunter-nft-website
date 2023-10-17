import React from "react";

const FAQ = () => {
  return (
    <section className="container  flex flex-col items-center p-10">
      <img src="/asserts/images/faq-name.svg" alt="" />
      <div className="max-w-6xl my-12  divide-y-2 divide-gray-600">
        {/*  */}
        <div className="faq-qes p-8 flex gap-8 items-start">
          <img src="/asserts/images/number-1.svg" alt="" />
          <div className="flex-1">
            <h3 className="text-3xl mb-5">
              Alright, but what exactly do you do?
            </h3>
            <p>
              Timperdiet gravida scelerisque odio nunc. Eget felis, odio
              bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis
              sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus
              lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
            </p>
          </div>
          <div className="">
            <img src="/asserts/images/_xmark.svg" alt="" className="md:w-12" />
            <img src="/asserts/images/_plus.svg" alt="" className="hidden" />
          </div>
        </div>
        {/*  */}
        <div className="faq-qes p-8 flex gap-8 items-start">
          <img src="/asserts/images/number-2.svg" alt="" />
          <div className="flex-1">
            <h3 className="text-3xl mb-5">
              I don't need a brand strategist but I need help executing an
              upcoming campaign. Can we still work together?{" "}
            </h3>
            <p className="hidden">
              Timperdiet gravida scelerisque odio nunc. Eget felis, odio
              bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis
              sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus
              lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
            </p>
          </div>
          <div className="">
            <img src="/asserts/images/_xmark.svg" alt="" className="hidden" />
            <img src="/asserts/images/_plus.svg" alt="" className="" />
          </div>
        </div>
        {/*  */}
        <div className="faq-qes p-8 flex gap-8 items-start">
          <img src="/asserts/images/number-3.svg" alt="" />
          <div className="flex-1">
            <h3 className="text-3xl mb-5">Are your rates competitive?</h3>
            <p className="hidden">
              Timperdiet gravida scelerisque odio nunc. Eget felis, odio
              bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis
              sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus
              lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
            </p>
          </div>
          <div className="">
            <img src="/asserts/images/_xmark.svg" alt="" className="hidden" />
            <img src="/asserts/images/_plus.svg" alt="" className="" />
          </div>
        </div>
        {/*  */}
        <div className="faq-qes p-8 flex gap-8 items-start">
          <img src="/asserts/images/number-4.svg" alt="" />
          <div className="flex-1">
            <h3 className="text-3xl mb-5">
              Why do you have a monthly project cap?
            </h3>
            <p className="hidden">
              Timperdiet gravida scelerisque odio nunc. Eget felis, odio
              bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis
              sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus
              lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
            </p>
          </div>
          <div className="">
            <img src="/asserts/images/_xmark.svg" alt="" className="hidden" />
            <img src="/asserts/images/_plus.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
