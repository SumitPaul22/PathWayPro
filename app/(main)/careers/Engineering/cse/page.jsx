import { ArrowBigRightIcon, ArrowLeftFromLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CSE() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="career-header mb-6">
      <nav className="text-gray-600 dark:text-gray-300 mt-2">
          <Link href="/careers/Engineering" className="hover:underline flex items-center">
            <ArrowLeftFromLineIcon className="mr-2" />
            Go Back
          </Link>
        </nav>
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-xl shadow-xl text-white">
        <h2 className="text-3xl font-bold mb-4">Computer Science & IT</h2></div>
      </section>

      <section className="career-content mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">About Computer Science & IT</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Computer Science and Information Technology (IT) are dynamic fields that drive innovation and shape the digital world. 
          From software development and cybersecurity to data science and artificial intelligence, these disciplines are integral to 
          nearly every aspect of modern life.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          This sector offers diverse career opportunities, with professionals designing, developing, and managing software, hardware, 
          networks, and information systems.
        </p>
      </section>

          {/* Flex Container: Text Left - Image Right */}
    <section className="career-path bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
            Career Path in Computer Science & IT
          </h2>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Choose the Right Course 🎓
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>B.Tech/B.E. in Computer Science Engineering (🕒 4 Years)</li>
            <li>BSc in Computer Science (🕒 3 Years)</li>
            <li>Bachelor of Information Technology (BIT) (🕒 4 Years)</li>
            <li>Diploma in Computer Engineering/IT (🕒 3 Years)</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Gain Practical Experience 💻
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Internships in software development or IT companies</li>
            <li>Learn programming languages (Python, Java, C++), frameworks (React, Angular), and tools (Git, Docker)</li>
            <li>Contribute to open-source projects or build personal projects</li>
            <li>Gain experience with cloud computing platforms (AWS, Azure, GCP)</li>
          </ul>

          <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">
            Higher Studies or Jobs? 🚀
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
            <li>Work as a Software Developer, Web Developer, or System Administrator</li>
            <li>Become a Data Scientist, Cybersecurity Analyst, or Network Engineer</li>
            <li>Pursue M.Tech/MS in Computer Science or MBA for specialized roles</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-none">
          <Image 
            src="/CSE.jpg" 
            alt="Computer Science & IT" 
            width={700} 
            height={250} 
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>
    </div>
  );
}