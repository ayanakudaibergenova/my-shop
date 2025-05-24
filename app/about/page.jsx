import React from "react";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";

const About = () => {
  const cards = [
    {
      img: assets.card1,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
    {
      img: assets.card1,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
    {
      img: assets.card1,
      title: "Fashion Trends",
      subtitle: "Discover the latest fashion trends and styles on our website.",
    },
  ];

  return (
    <>
      <Navbar />;
      <div className="about flex flex-col gap-8 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center">About</h2>

        <p className="text-base text-center max-w-2xl mx-auto">
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
                src={card.img}
                alt="qwerty"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 transition duration-300 ease-in-out bg-gradient-to-b from-transparent to-teal-900/80 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-semibold mb-2 text-orange-400 group-hover:text-white transition">
                  {card.title}
                </h3>
                <p className="text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <h3 className="text-2xl font-semibold mt-12">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-4 mt-4">
          <details className="bg-gray-100 rounded-md p-4">
            <summary className="cursor-pointer font-medium">
              How do I choose the right size?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              We include a detailed size chart with every product. If you’re
              unsure, feel free to message us — we’ll help you find the perfect
              fit.
            </p>
          </details>
          <details className="bg-gray-100 rounded-md p-4">
            <summary className="cursor-pointer font-medium">
              How can I place an order?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Just add the item to your cart, go to checkout, and enter your
              information. After confirmation, we’ll contact you to confirm the
              details.
            </p>
          </details>
          <details className="bg-gray-100 rounded-md p-4">
            <summary className="cursor-pointer font-medium">
              What payment methods do you accept?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              We accept various payment methods, including major credit cards
              (Visa, MasterCard, American Express), PayPal, and other secure
              payment options.
            </p>
          </details>
          <details className="bg-gray-100 rounded-md p-4">
            <summary className="cursor-pointer font-medium">
              How long does delivery take?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
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
