"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  LightbulbIcon,
  Mic2Icon,
  UsersIcon,
  WrenchIcon,
  CodeIcon,
  NewspaperIcon,
  ClockIcon,
} from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

function Dashboard({ theme }) {
  const pathname = usePathname();

  const navItems = [
    { text: "Career Advice", icon: <BriefcaseIcon className="w-6 h-6" />, path: "/career-advice" },
    { text: "Industry Insights", icon: <LightbulbIcon className="w-6 h-6" />, path: "/industry-insights" },
    { text: "Skill Building", icon: <WrenchIcon className="w-6 h-6" />, path: "/skill-building" },
    { text: "Interview Prep", icon: <Mic2Icon className="w-6 h-6" />, path: "/interview-prep" },
    { text: "Networking Strategies", icon: <UsersIcon className="w-6 h-6" />, path: "/networking" },
  ];

  const careers = [
    { icon: "💻", title: "Engineering", opportunities: 8, path: "/careers/Engineering" },
    { icon: "🏢", title: "Management", opportunities: 5, path: "/careers/Management" },
    { icon: "💚", title: "Medicine", opportunities: 7, path: "/careers/Medicine" },
    { icon: "🎨", title: "Design & Graphics", opportunities: 5, path: "/careers/DesignGraphics" },
    { icon: "💰", title: "Finance & Accounts", opportunities: 5, path: "/careers/FinanceAccounts" },
    { icon: "⚖️", title: "Civil Services", opportunities: 5, path: "/careers/CivilServices" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="bg-white dark:bg-gray-800 flex flex-1">
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-xl shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Welcome back, [User]!</h2>
              <p className="mb-4">Ready to take the next step in your career journey?</p>
              <div className="mb-4">
                <p className="text-sm mb-1">Mentorship Progress: 60%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-violet-300 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                {["Career Advice", "Skill Building", "Interview Prep"].map((link, idx) => (
                  <motion.button
                    key={idx}
                    className="bg-violet-100 text-violet-600 px-3 py-1 rounded-lg hover:bg-violet-200 dark:bg-violet-700 dark:text-white dark:hover:bg-violet-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
              <motion.button
                className="mt-4 bg-white text-violet-600 px-5 py-2 rounded-lg shadow-lg hover:shadow-xl font-medium dark:bg-gray-800 dark:text-violet-300 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Mentorship Session
              </motion.button>
              <BorderBeam duration={8} size={100} />
            </div>
          </motion.div>

          {/* Career Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Next Skill to Learn",
                description: "Based on your career goals, we recommend learning Python Programming.",
                button: "Learn Now",
                icon: <CodeIcon className="w-8 h-8 text-violet-600 dark:text-violet-300" />,
              },
              {
                title: "Industry News",
                description: "To know about the latest industry news, Click here.",
                button: <Link href="/insightnews">Read More</Link>,
                icon: <NewspaperIcon className="w-8 h-8 text-violet-600 dark:text-violet-300" />,
              },
              {
                title: "Assesment Test",
                description: 'Confused about what career to choose? Take a test.',
                button: <Link href="/quiz">Click Here!</Link>,
                icon: <QuestionMarkIcon className="w-8 h-8 text-violet-600 dark:text-violet-300" />,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center">
                      {card.icon}
                      <CardTitle className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">{card.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
                  </CardContent>
                  <CardFooter>
                    <motion.button
                      className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 font-medium dark:bg-violet-500 dark:hover:bg-violet-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {card.button}
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Updated Careers Section */}
          <motion.div
            className="bg-white p-6 mt-6 rounded-xl shadow-md dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Checkout Exciting Careers</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {careers.map((career, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-center p-4">
                      <div className="text-4xl text-violet-600 dark:text-violet-300 mb-2">{career.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{career.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        ({career.opportunities} possible opportunities)
                      </p>
                      <Link href={career.path}>
                        <motion.div
                          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 font-medium dark:bg-violet-500 dark:hover:bg-violet-600"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            className="mt-6 bg-violet-100 p-6 rounded-xl shadow-md text-center dark:bg-violet-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-violet-800 mb-4 dark:text-violet-200">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-gray-700 mb-4 dark:text-gray-300">
              "Thanks to the mentorship program, I landed my dream job at a top tech company!" - Jane Doe
            </p>
            <motion.button
              className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 font-medium dark:bg-violet-500 dark:hover:bg-violet-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Now
            </motion.button>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;