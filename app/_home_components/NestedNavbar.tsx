"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { IoClose } from "react-icons/io5";

interface MenuItem {
  label: string;
  href?: string;
  icon?: JSX.Element;
  subItems?: MenuItem[];
}

const nestedNavbarMenuData: MenuItem[] = [
  { label: "Home", href: "#home", icon: <ChevronRight size={16} /> },
  {
    label: "Services",
    icon: <ChevronDown size={16} />,
    subItems: [
      { label: "Web Development", href: "#web-dev" },
      {
        label: "Mobile Apps",
        subItems: [
            { label: "iOS Development", href: "#ios", subItems: [{ label: "Swift", href: "#swift", subItems: [{ label: "Swift V2", href: "#swiftv" }] }] },
          { label: "Android Development", href: "#android" },
        ],
      },
    ],
  },
  { label: "About", href: "#about", icon: <ChevronRight size={16} /> },
  { label: "Contact", href: "#contact", icon: <ChevronRight size={16} /> },
];

const DropdownItem: React.FC<{ item: MenuItem; depthLevel: number }> = ({
    item,
    depthLevel,
}) => {
    depthLevel++
    const [isOpen, setIsOpen] = useState(false);
    const hasSubItems = !!item.subItems;

    // Adjust padding based on nesting level
    const paddingLeft = `${depthLevel * 10}px`;

    return (
        <div className="relative group">
            <button
                className="relative flex items-center justify-between w-full text-left px-4 py-2 text-white  focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{item.label}</span>
                {hasSubItems && (
                    <motion.span
                        className="ml-2"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                        <ChevronDown size={16} />
                    </motion.span>
                )}
            </button>

            {hasSubItems && (
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ paddingLeft }}
                            className={`absolute left-0 mt-1 w-full max-w-screen md:w-52 bg-black/50 text-black backdrop-blur-md shadow-lg z-50 rounded-md group-hover:block `}
                        >
                            {item.subItems?.map((subItem) => (
                                <DropdownItem
                                    key={subItem.label}
                                    item={subItem}
                                    depthLevel={depthLevel}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

const NestedNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Navbar</div>
        <div className="hidden md:flex space-x-4">
          {nestedNavbarMenuData.map((item) => (
            <DropdownItem key={item.label} item={item} depthLevel={0}/>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <IoClose size={16} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-700"
          >
            {nestedNavbarMenuData.map((item) => (
                <DropdownItem key={item.label} item={item} depthLevel={0} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NestedNavbar;
