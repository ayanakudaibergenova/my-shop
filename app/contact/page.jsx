import React from "react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md text-center font-sans text-gray-600">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="mb-6">
          We would love to hear from you! If you have any questions, feedback,
          or inquiries, please feel free to reach out to us.
        </p>

        <div className="mb-8 space-y-2 text-gray-700 text-lg">
          <p>
            <strong>Address:</strong> 1234 Street Name, City, State, 56789
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold hover:text-blue-600 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:text-blue-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
