import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

export type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 z-999 w-full bg-black flex justify-center items-center">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[67%] max-w-360 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className="shrink-0 flex items-center cursor-pointer">
            <img
              src="/assets/svgs/fit-logo.svg"
              alt="Fit Logo"
              className="h-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex justify-center items-center gap-6.25">
          {navLinks?.map((link) => (
            <Link
              key={link?.name}
              to={link?.href}
              className="text-white font-semibold text-[16px] leading-[100%] capitalize transition-all duration-300 hover:text-yellow-400"
            >
              {link?.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            <img
              src="/assets/svgs/hamburger-icon.svg"
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        menuItems={navLinks}
      />
    </header>
  );
};

export default Header;
