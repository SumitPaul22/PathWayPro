import { ArrowLeftFromLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Civil() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <section className="career-header mb-6">
      <nav className="text-gray-600 dark:text-gray-300 mt-2">
          <Link href="/careers/Engineering" className="hover:underline flex items-center">
            <ArrowLeftFromLineIcon className="mr-2" />
            Go Back
          </Link>
        </nav>
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-xl shadow-xl text-white">
          <h2 className="text-3xl font-bold mb-4">Civil Engineering</h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="career-content mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          About Civil Engineering
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Civil Engineering is one of the oldest and most essential branches of engineering, responsible for designing, constructing, 
          and maintaining the infrastructure that supports modern society. This includes buildings, roads, bridges, dams, airports, 
          tunnels, railways, water supply systems, and sewage treatment plants.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Civil engineers play a crucial role in shaping the environment while ensuring safety, sustainability, and economic feasibility. 
          With the rise of smart cities, sustainable construction, and innovative materials, civil engineering is evolving rapidly, making 
          it a dynamic and rewarding career choice.
        </p>
      </section>

      {/* Flex Container: Text Left - Image Right */}
      <section className="career-path bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
            Career Path in Civil Engineering
          </h2>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Choose the Right Course 🎓
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>B.Tech/B.E. in Civil Engineering (🕒 4 Years)</li>
            <li>Diploma in Civil Engineering (🕒 3 Years)</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Gain Practical Experience 🏗
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Internships in construction projects</li>
            <li>Learn software tools like AutoCAD, Revit, STAAD.Pro, ETABS</li>
            <li>Work on real-world infrastructure projects</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Higher Studies or Jobs? 🚀
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Work as a Site Engineer, Project Manager, or Consultant</li>
            <li>Become a Structural Designer or an Urban Planner</li>
            <li>Pursue M.Tech or MBA for career advancement</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Emerging Fields in Civil Engineering 🌍
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Smart Cities & Sustainable Construction</li>
            <li>Green Building Technologies</li>
            <li>Earthquake-Resistant Structures</li>
            <li>3D Printing in Construction</li>
            <li>Blockchain in Infrastructure Management</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Build Your Career 🔥
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Work in government/private infrastructure projects</li>
            <li>Start your own construction or real estate business</li>
            <li>Obtain certifications like PMP, LEED, or RICS for career growth</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-none">
          <Image 
            src="/civil.jpeg" 
            alt="Civil Engineering Image" 
            width={950} 
            height={250} 
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>
    </div>
  );
}
