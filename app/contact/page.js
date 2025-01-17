// app/contact/page.js

import Link from "next/link";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 text-center">
            You can reach us via email at{" "}
            <Link
              href="mailto:contact.jeweltine@gmail.com"
              className="text-blue-500 hover:underline"
            >
              contact.jeweltine@gmail.com
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
