import { Link } from "react-router-dom";

type FooterLink = {
    name: string;
    href: string;
};

const leftLinks: FooterLink[] = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "#" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
];

const rightLinks: FooterLink[] = [
    { name: "White Paper", href: "#" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Code Of Conduct", href: "/code-of-conduct" },
];

const Footer = () => {
    return (
        <footer className="bg-black text-white flex justify-center py-10 md:py-16 xl:pt-[45px] xl:pb-[15px]">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[54%] max-w-360">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-15 pb-[15px]">
                    {/* Left */}
                    <div className="flex flex-col gap-[30px]">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/assets/svgs/fit-logo.svg"
                                alt="FITS Logo"
                                className="w-full"
                            />
                        </Link>
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                                <img
                                    src="/assets/svgs/footer-insta.svg"
                                    alt="Instagram"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="X">
                                <img
                                    src="/assets/svgs/footer-twitter.svg"
                                    alt="X"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                                <img
                                    src="/assets/svgs/footer-facebook.svg"
                                    alt="Facebook"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex gap-14 md:gap-20">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3">
                            {leftLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-[14px] font-[Inter] text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-3">
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-[14px] font-[Inter] text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <hr className="border-[#222] py-[10px]" />
                {/* Bottom */}
                <div className="text-center text-[12px] text-gray-400 font-[Inter]">
                    Copyright ©2024 Functionised Blockchain Technology Inc.&nbsp; |&nbsp; All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;