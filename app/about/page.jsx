import React from "react";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";

const About = () => {
  const cards = [
    {
      id: 1,
      imgSrc: assets.card_one,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
    {
      id: 2,
      imgSrc: assets.card_one,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
    {
      id: 3,
      imgSrc: assets.card_one,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
  ];

  console.log(cards[0].imgSrc.src);

  return (
    <>
      <Navbar />;
      <div className="about flex flex-col gap-8 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center text-2xl  md:text-[35px]">
          About
        </h2>

        <p className="text-base text-center max-w-2xl mx-auto text-2xl  md:text-[28px] ">
          Ayanity is not just a clothing store. It is a space for every girl who
          wants to feel confident, stylish and free to be herself. We create
          images that combine femininity, comfort and modernity.
        </p>

        <section className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-64 h-80 bg-teal-700 text-white cursor-pointer group"
            >
              <img
                className="w-full h-full object-cover opacity-80"
                src={card.imgSrc.src}
                alt="qwerty"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 transition duration-300 ease-in-out bg-gradient-to-b from-transparent to-teal-900/80 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-semibold mb-2 text-pink-400 group-hover:text-white transition">
                  {card.title}
                </h3>
                <p className="text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <h3 className="text-3xl font-bold mt-12 text-pink-600">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-6 mt-6">
          <details className="bg-pink-50 rounded-lg p-6 border border-pink-200">
            <summary className="cursor-pointer font-semibold text-pink-700 text-lg md:text-[28px]">
              How do I choose the right size?
            </summary>
            <p className="mt-3 text-base text-pink-600 leading-relaxed md:text-[21px]">
              We include a detailed size chart with every product. If you’re
              unsure, feel free to message us — we’ll help you find the perfect
              fit.
            </p>
          </details>
          <details className="bg-pink-50 rounded-lg p-6 border border-pink-200">
            <summary className="cursor-pointer font-semibold text-pink-700 text-lg md:text-[28px]">
              How can I place an order?
            </summary>
            <p className="mt-3 text-base text-pink-600 leading-relaxed md:text-[21px]">
              Just add the item to your cart, go to checkout, and enter your
              information. After confirmation, we’ll contact you to confirm the
              details.
            </p>
          </details>
          <details className="bg-pink-50 rounded-lg p-6 border border-pink-200">
            <summary className="cursor-pointer font-semibold text-pink-700 text-lg md:text-[28px]">
              What payment methods do you accept?
            </summary>
            <p className="mt-3 text-base text-pink-600 leading-relaxed md:text-[21px]">
              We accept various payment methods, including major credit cards
              (Visa, MasterCard, American Express), PayPal, and other secure
              payment options.
            </p>
          </details>
          <details className="bg-pink-50 rounded-lg p-6 border border-pink-200">
            <summary className="cursor-pointer font-semibold text-pink-700 text-lg md:text-[28px]">
              How long does delivery take?
            </summary>
            <p className="mt-3 text-base text-pink-600 leading-relaxed md:text-[21px]">
              Delivery within Kyrgyzstan takes 2 to 5 business days. We always
              try to ship your order as quickly as possible.
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default About;
