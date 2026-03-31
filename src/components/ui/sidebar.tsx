import { Link } from "react-router-dom";
import type { NavLink } from "./header";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    menuItems: NavLink[];
};

const Sidebar = ({ isOpen, onClose, menuItems }: SidebarProps) => {
    return (
        <div
            className={`fixed top-0 right-0 h-screen w-full bg-black z-50 transition-transform duration-1000 flex flex-col items-center justify-center ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div>
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-900 transition-colors z-50"
                    aria-label="Close menu"
                >
                    <img
                        src="/assets/svgs/close.svg"
                        alt="Close"
                        className="w-6 h-6 invert"
                    />
                </button>
            </div>
            {/* Links */}
            <div className="flex flex-col items-center gap-6">
                <div>
                    <ul className="flex flex-col gap-6 text-[20px] font-semibold text-center uppercase tracking-wider">
                        {menuItems?.map((item) => (
                            <li
                                key={item?.name}
                                onClick={onClose}
                                className="text-white cursor-pointer hover:text-primary transition-colors duration-300"
                            >
                                <Link to={item?.href}>{item?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
