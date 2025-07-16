import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-footer font-sans text-text">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-20">
        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left column: logo + contact info */}
          <div>
            <div className="mb-8 flex h-[100px] w-[220px] items-center justify-center bg-gray-300 text-xs text-gray-600">
              Logo Placeholder
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Link
                  href="mailto:contactus@transplant.org.au"
                  className="transform transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  contactus@transplant.org.au
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <Link
                  href="tel:1800827757"
                  className="transform transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Within Australia 1800 827 757
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <Link
                  href="tel:+61299225400"
                  className="transform transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Outside Australia +61 2 9922 5400
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <Link
                  href="#top"
                  className="transform transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  PO Box 3444, Rhodes, NSW 2138
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle column: partners */}
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider">
              Proudly Presented By
            </h3>
            <div className="mb-4">
              <Image
                src="/logo-trans.png"
                alt="Partner 1"
                width={200}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
            <div>
              <Image
                src="/partner.png"
                alt="DonateLife"
                width={140}
                height={60}
                className="mx-auto object-contain"
              />
            </div>
          </div>

          {/* Right column: quick links */}
          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 border-t border-gray-300 pt-3 text-sm">
              <li>
                <a
                  href="#"
                  className="block transform border-b border-gray-200 pb-1 transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  The Sports
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block transform border-b border-gray-200 pb-1 transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Schedule
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block transform border-b border-gray-200 pb-1 transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Registration
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block transform border-b border-gray-200 pb-1 transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Frequently Asked Questions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block transform border-b border-gray-200 pb-1 transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block transform transition duration-200 hover:scale-105 hover:text-pink-700"
                >
                  Latest News
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 space-y-4 text-left text-sm text-gray-600">
          <p>
            We acknowledge the Ngunnawal and Ngambri peoples who are the
            traditional custodians of the land on which we gather for the 2026
            Australian Transplant Games. We recognise their connections to land,
            sea, and community and pay our respect to their elders past and
            present.
          </p>

          <div className="mt-2 flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Left: Copyright + Links */}
            <div className="text-sm text-gray-600">
              © 2026 Australian Transplant Games. All Rights Reserved
              <span className="mx-2 text-pink-500">|</span>
              <Link
                href="#"
                className="transform text-pink-500 transition duration-200 hover:scale-105 hover:text-pink-700"
              >
                Privacy Statement
              </Link>
              <span className="mx-2 text-pink-500">|</span>
              <Link
                href="#"
                className="transform text-pink-500 transition duration-200 hover:scale-105 hover:text-pink-700"
              >
                Medical Website by Wolf IQ
              </Link>
            </div>

            {/* Right: social icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/transplantaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-200 hover:scale-105"
              >
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link
                href="https://www.facebook.com/transplantaustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-200 hover:scale-105"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
