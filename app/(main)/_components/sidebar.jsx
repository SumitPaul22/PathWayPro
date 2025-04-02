import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon } from "lucide-react";

const navItems = [
  { text: "Career Advice", icon: "💼", path: "/career-advice" },
  { text: "Industry Insights", icon: "💡", path: "/industry-insights" },
  { text: "Skill Building", icon: "🔧", path: "/skill-building" },
  { text: "Interview Prep", icon: "🎤", path: "/interview-prep" },
  { text: "Networking", icon: "🤝", path: "/networking" },
];

// Define the header navigation items to be shown only on mobile in the sidebar
const headerNavItems = [
  { text: "Home", path: "/dashboard" },
  { text: "About Us", path: "/aboutus" },
  { text: "Ask AI", path: "/askai" },
];

function Sidebar({ isOpen, toggle, theme }) {
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest("#sidebar") && !event.target.closest("#menu-btn") && isOpen) {
        toggle(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, toggle]);

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg pt-20`}
    >
      {/* Sidebar Header */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Dashboard</h2>
      </div>

      {/* User Profile Section */}
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src="/user-avatar.jpg" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">[User]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Mentee</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-lg focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="p-4">
          {/* Header Navigation Links - Visible Only on Mobile */}
          <div className="block md:hidden">
            {headerNavItems.map((item, index) => (
              <motion.li
                key={`header-${index}`}
                className={`mb-3 flex items-center p-2 rounded-lg ${
                  pathname === item.path
                    ? "bg-violet-100 dark:bg-violet-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.path}
                  className="text-violet-600 hover:text-violet-800 font-medium dark:text-violet-300 dark:hover:text-violet-100"
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </div>

          {/* Existing Navigation Items - Visible on All Screens */}
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className={`mb-3 flex items-center p-2 rounded-lg ${
                pathname === item.path
                  ? "bg-violet-100 dark:bg-violet-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="mr-3 text-violet-600 dark:text-violet-300">{item.icon}</span>
              <Link
                href={item.path}
                className="text-violet-600 hover:text-violet-800 font-medium dark:text-violet-300 dark:hover:text-violet-100"
              >
                {item.text}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;