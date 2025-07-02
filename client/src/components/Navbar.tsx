import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // -------Placeholder for authentication state-------

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div>
        <div className="md:px-15 flex h-32 w-full justify-between bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] p-10 text-center font-dm-sans text-base font-extrabold uppercase leading-6 tracking-wide text-white sm:justify-center md:justify-between lg:px-20">
          {/* logo */}
          <a
            href="https://transplant.org.au"
            className="block pr-5 sm:hidden md:block"
          >
            <Image
              src="/TA-logo.png"
              alt="Logo of Transplant Australia"
              width={120}
              height={70}
            />
          </a>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="flex h-11 items-center sm:gap-11 md:gap-12">
              <Link href="#">HOME</Link>
              <Link href="#">ABOUT</Link>
              <Link href="#">PARTICIPATE</Link>
              {isLoggedIn ? (
                <Link href="#">LOGOUT</Link>
              ) : (
                <Link href="#">LOGIN</Link>
              )}
              {isLoggedIn ? (
                <Link
                  href="#"
                  className="flex w-28 rounded-full bg-white px-5 py-2 text-[var(--primary)]"
                >
                  Account
                </Link>
              ) : (
                <Link
                  href="#"
                  className="flex w-28 text-nowrap rounded-full bg-white px-5 py-2 text-[var(--primary)]"
                >
                  SIGN UP
                </Link>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md p-2"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* hamburger icon when menu is closed */}
              <svg
                className={isMobileMenuOpen ? "hidden" : "block"}
                width="31"
                height="22"
                fill="none"
                viewBox="0 0 31 22"
                strokeWidth="2.5"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.5 2.5h26M2.5 11h26M2.5 19.5h26"
                />
              </svg>
              {/* icon when menu is open */}
              <svg
                className={isMobileMenuOpen ? "block" : "hidden"}
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*  Mobile menu, show/hide based on menu state.*/}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="border-t">
            <Link
              href="#"
              className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
            >
              PARTICIPATE
            </Link>
            {isLoggedIn ? (
              <Link
                href="#"
                className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
              >
                LOGOUT
              </Link>
            ) : (
              <Link
                href="#"
                className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
              >
                LOGIN
              </Link>
            )}
            {isLoggedIn ? (
              <Link
                href="#"
                className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
              >
                ACCOUNT
              </Link>
            ) : (
              <Link
                href="#"
                className="block h-11 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] py-3 text-center font-dm-sans font-medium uppercase text-white"
              >
                SIGNUP
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
