import Image from "next/image";
import React from "react";
function Footer() {
  return (
    <footer className="bg-[#0A122A] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Branding */}
        <div>
          <Image
            width={100}
            height={100}
            src={"/images/Logowhite.svg"}
            alt="Newton Academy"
            blurDataURL="data:..."
            className="w-[120px]"
          />
          {/* <h3 className="text-2xl font-bold mb-3">Newton Academy</h3> */}
          <p className="text-gray-300 text-sm">
            Empowering women and girls with digital skills for a brighter
            future.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              📧
              <a
                href="mailto:na@newtoncore.com"
                className="hover:text-teal-400"
              >
                na@newtoncore.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              🌐
              <a
                href="https://academy.newtoncore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
              >
                academy.newtoncore.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>[Insert Phone Number]</span>
            </li>
          </ul>
        </div>

        {/* Footer Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#our-solution" className="hover:text-teal-400">
                Our Solution
              </a>
            </li>
            <li>
              <a href="#what-we-offer" className="hover:text-teal-400">
                What We Offer
              </a>
            </li>
            <li>
              <a href="#why-digital-entrepreneurship" className="hover:text-teal-400">
                Why Digital Entrepreneurship
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Newton Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
