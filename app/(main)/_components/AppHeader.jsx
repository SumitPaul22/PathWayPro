import React from "react";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";
import { SunIcon, MoonIcon, BellIcon, MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function AppHeader({ theme, toggleTheme, isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between">
      {/* Left side: Menu button and Logo */}
      <div className="flex items-center space-x-4">
        <motion.button
          id="menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </motion.button>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <div className="text-black dark:text-white font-bold text-xl tracking-wide">
          <a href="/dashboard">PathWayPro</a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
          Home
        </Link>
        <Link href="/aboutus" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
          About
        </Link>
        <Link href="/askai" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
          Ask AI
        </Link>
      </nav>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        {/* <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">3</span>
        </button> */}

        {/* Theme Toggle */}
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <MoonIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <SunIcon className="w-6 h-6 text-gray-300" />
          )}
        </button>

        {/* User Profile */}
        <UserButton />
      </div>
    </header>
  );
}

export default AppHeader;