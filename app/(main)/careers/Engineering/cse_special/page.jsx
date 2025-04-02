import { ArrowBigRightIcon, ArrowLeftFromLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CSESpecializations() {
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
          <h2 className="text-3xl font-bold mb-4">CSE Specializations</h2>
        </div>
      </section>

      {/* Specialization: AI & ML */}
      <section className="career-box mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          Artificial Intelligence & Machine Learning (AIML)
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling machines to learn, adapt, 
          and make intelligent decisions. From automation and data analysis to predictive modeling and deep learning, AI and ML 
          are revolutionizing technology.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          These fields offer numerous career opportunities, including research, software development, data science, and AI-driven automation. 
          The demand for AI professionals continues to grow as industries seek to leverage AI for innovation and efficiency.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Choose the Right Course 🎓</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>B.Tech/B.E. in Artificial Intelligence & Data Science (🕒 4 Years)</li>
              <li>BSc in Data Science & Machine Learning (🕒 3 Years)</li>
              <li>PG Diploma in AI & ML (🕒 1-2 Years)</li>
              <li>M.Tech/MS in Artificial Intelligence (🕒 2 Years)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Gain Practical Experience 💻</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Internships in AI research labs or tech companies</li>
              <li>Learn programming languages (Python, R, Julia), libraries (TensorFlow, PyTorch, Scikit-learn)</li>
              <li>Work on AI and ML projects such as chatbots, recommendation systems, or predictive analytics</li>
              <li>Participate in AI competitions (Kaggle, Google AI Challenge, etc.)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Higher Studies or Jobs? 🚀</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work as a Data Scientist, ML Engineer, AI Researcher, or NLP Engineer</li>
              <li>Become an AI Consultant, Computer Vision Specialist, or Robotics Engineer</li>
              <li>Pursue Ph.D. or advanced research in Deep Learning and AI Ethics</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Emerging Fields in AI & ML 🌐</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Deep Learning & Neural Networks</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision & Image Recognition</li>
              <li>Reinforcement Learning & AI Robotics</li>
              <li>AI in Healthcare & Finance</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Build Your Career 🔥</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work with AI startups, tech giants, or research institutions</li>
              <li>Develop AI-driven applications for various industries</li>
              <li>Obtain certifications like TensorFlow Developer, AWS AI Specialist, or Microsoft AI Engineer</li>
              <li>Stay updated with AI advancements and contribute to open-source projects</li>
            </ul>
          </div>

          <div className="flex w-full md:w-auto items-end">
            <Image
              src="https://mlrit.ac.in/wp-content/uploads/2022/06/ai.jpg"
              alt="AI & ML"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Specialization: Cybersecurity */}
      <section className="career-box mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          Computer Science & Cybersecurity (CSCS)
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Cybersecurity is a rapidly growing field focused on protecting computer systems, networks, and data from cyber threats. 
          With the increasing number of cyberattacks, organizations are investing heavily in security measures to safeguard sensitive information.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Cybersecurity professionals play a crucial role in identifying vulnerabilities, implementing security measures, and responding to cyber threats. 
          This field offers numerous career opportunities, including ethical hacking, network security, and incident response.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Choose the Right Course 🎓</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>B.Tech/B.E. in Cybersecurity or Information Security (🕒 4 Years)</li>
              <li>BSc in Cybersecurity & Ethical Hacking (🕒 3 Years)</li>
              <li>PG Diploma in Cybersecurity (🕒 1-2 Years)</li>
              <li>M.Tech/MS in Cybersecurity & Digital Forensics (🕒 2 Years)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Gain Practical Experience 💻</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Internships in cybersecurity firms or IT security teams</li>
              <li>Learn security tools (Wireshark, Metasploit, Burp Suite) and programming (Python, Bash, PowerShell)</li>
              <li>Participate in Capture The Flag (CTF) competitions and bug bounty programs</li>
              <li>Gain experience in penetration testing, cryptography, and threat analysis</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Higher Studies or Jobs? 🚀</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work as a Security Analyst, Ethical Hacker, or Network Security Engineer</li>
              <li>Become a Cyber Forensics Expert, SOC Analyst, or Cybersecurity Consultant</li>
              <li>Pursue certifications like CEH (Certified Ethical Hacker), CISSP, CISM, or OSCP</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Emerging Fields in Cybersecurity 🌐</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Ethical Hacking & Penetration Testing</li>
              <li>Cloud Security & DevSecOps</li>
              <li>IoT Security & Industrial Cybersecurity</li>
              <li>Cyber Threat Intelligence & Digital Forensics</li>
              <li>Blockchain Security & Zero Trust Architecture</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Build Your Career 🔥</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work with government agencies, IT security firms, or financial institutions</li>
              <li>Develop security solutions and vulnerability management systems</li>
              <li>Obtain industry-recognized certifications and stay updated with cyber threats</li>
              <li>Contribute to cybersecurity research, ethical hacking, and open-source projects</li>
            </ul>
          </div>

          <div className="flex w-full md:w-auto items-end">
            <Image
              src="https://www.piet.co.in/wp-content/uploads/2022/04/cyber-security-1.png"
              alt="Cybersecurity"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Specialization: Computer Science and Data Science (CSDS) */}
      <section className="career-box mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          Computer Science and Data Science (CSDS)
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Computer Science and Data Science (CSDS) integrates computational techniques with data analysis to solve complex problems across industries. 
          It equips professionals with skills in programming, data management, and statistical modeling.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Choose the Right Course 🎓</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>B.Tech/B.E. in Computer Science & Business Systems (🕒 4 Years)</li>
              <li>BSc in Business Analytics & IT (🕒 3 Years)</li>
              <li>PG Diploma in Business Intelligence & Data Analytics (🕒 1-2 Years)</li>
              <li>M.Tech/MBA in Business Analytics & IT Management (🕒 2 Years)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Gain Practical Experience 💻</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Internships in IT consulting firms, fintech companies, or business intelligence roles</li>
              <li>Learn programming languages (Python, SQL, Java) and business tools (Power BI, Tableau, SAP)</li>
              <li>Work on projects related to data-driven decision-making, CRM systems, or AI in business</li>
              <li>Gain experience with cloud computing platforms and ERP systems</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Higher Studies or Jobs? 🚀</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work as a Business Analyst, Data Scientist, IT Consultant, or Product Manager</li>
              <li>Become a Business Intelligence Developer, Digital Transformation Strategist, or ERP Specialist</li>
              <li>Pursue higher studies in AI & Business Intelligence, Data Science, or Tech-driven Business Management</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Emerging Fields in CSDS 🌐</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Business Analytics & Data Science</li>
              <li>Cloud Computing & Enterprise Solutions</li>
              <li>AI & Automation in Business</li>
              <li>Financial Technology (FinTech) & Blockchain</li>
              <li>Supply Chain & Logistics Optimization</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Build Your Career 🔥</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work with multinational corporations, consulting firms, or tech startups</li>
              <li>Develop business intelligence solutions for decision-making and automation</li>
              <li>Obtain certifications like AWS Business Analyst, Google Data Analytics, or PMI-PBA</li>
              <li>Stay updated with industry trends and participate in business hackathons</li>
            </ul>
          </div>

          <div className="flex w-full md:w-auto items-end">
            <Image
              src="https://redefcorp.com/data_img/datasci.jpg"
              alt="Computer Science & Data Science"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Specialization: Internet of Things (IoT) */}
      <section className="career-box mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          Internet of Things (IoT)
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          The Internet of Things (IoT) is a rapidly expanding field that connects devices and systems through the internet, enabling smart automation 
          and real-time data exchange. From smart homes and healthcare to industrial automation and transportation, IoT is transforming industries worldwide.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          IoT professionals work on developing connected solutions, ensuring data security, and optimizing device communication. Career opportunities 
          in IoT include embedded systems development, IoT security, cloud integration, and industrial IoT consulting.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Choose the Right Course 🎓</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>B.Tech/B.E. in IoT & Embedded Systems (🕒 4 Years)</li>
              <li>BSc in IoT & Smart Technologies (🕒 3 Years)</li>
              <li>PG Diploma in IoT & Automation (🕒 1-2 Years)</li>
              <li>M.Tech/MS in IoT & Robotics (🕒 2 Years)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Gain Practical Experience 💻</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Internships in IoT development firms or research labs</li>
              <li>Learn programming languages (C, Python, JavaScript) and IoT platforms (Arduino, Raspberry Pi, ESP32)</li>
              <li>Develop smart home automation, wearable tech, and industrial IoT applications</li>
              <li>Experiment with cloud-based IoT solutions like AWS IoT, Google Cloud IoT</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Higher Studies or Jobs? 🚀</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work as an IoT Engineer, Embedded Systems Developer, or Cloud IoT Architect</li>
              <li>Become an IoT Security Specialist, Industrial IoT Consultant, or Smart Systems Analyst</li>
              <li>Pursue research in IoT security, AI-driven IoT, and edge computing</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Emerging Fields in IoT 🌐</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Smart Cities & Infrastructure</li>
              <li>IoT in Healthcare & Wearable Tech</li>
              <li>Industrial IoT & Smart Manufacturing</li>
              <li>Edge Computing & 5G IoT</li>
              <li>IoT Security & Blockchain Integration</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Build Your Career 🔥</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work with IoT startups, automation industries, or government smart city projects</li>
              <li>Develop IoT-based applications for energy efficiency, agriculture, and industrial automation</li>
              <li>Obtain certifications like Cisco Certified IoT Specialist, AWS IoT Developer, or Google Cloud IoT Professional</li>
              <li>Stay updated with IoT trends and contribute to open-source IoT projects</li>
            </ul>
          </div>

          <div className="flex w-full md:w-auto items-end">
            <Image
              src="https://bestiu.edu.in/uploads/51ba570fe68fc088e0a942bdf8700cdce7eb8b1d/1709029458B--Tech-CSE-IOT.webp"
              alt="Internet of Things"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Specialization: Computer Science & Business Systems (CSBS) */}
      <section className="career-box mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 underline">
          Computer Science & Business Systems (CSBS)
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Computer Science and Business Systems (CSBS) is an interdisciplinary field that integrates core computer science principles with business strategies. 
          It equips professionals with technical knowledge and business acumen to solve real-world problems efficiently.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          CSBS professionals work in areas such as software development, data analytics, business intelligence, and IT consulting. This field offers career 
          opportunities in fintech, digital transformation, enterprise solutions, and business-driven technology development.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Choose the Right Course 🎓</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>B.Tech/B.E. in Computer Science & Business Systems (🕒 4 Years)</li>
              <li>BSc in Business Analytics & IT (🕒 3 Years)</li>
              <li>PG Diploma in Business Intelligence & Data Analytics (🕒 1-2 Years)</li>
              <li>M.Tech/MBA in Business Analytics & IT Management (🕒 2 Years)</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Gain Practical Experience 💻</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Internships in IT consulting firms, fintech companies, or business intelligence roles</li>
              <li>Learn programming languages (Python, SQL, Java) and business tools (Power BI, Tableau, SAP)</li>
              <li>Work on projects related to data-driven decision-making, CRM systems, or AI in business</li>
              <li>Gain experience with cloud computing platforms and ERP systems</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Higher Studies or Jobs? 🚀</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work as a Business Analyst, Data Scientist, IT Consultant, or Product Manager</li>
              <li>Become a Business Intelligence Developer, Digital Transformation Strategist, or ERP Specialist</li>
              <li>Pursue higher studies in AI & Business Intelligence, Data Science, or Tech-driven Business Management</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Emerging Fields in CSBS 🌐</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Business Analytics & Data Science</li>
              <li>Cloud Computing & Enterprise Solutions</li>
              <li>AI & Automation in Business</li>
              <li>Financial Technology (FinTech) & Blockchain</li>
              <li>Supply Chain & Logistics Optimization</li>
            </ul>

            <h3 className="text-xl font-medium text-violet-800 dark:text-white mb-2">Build Your Career 🔥</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
              <li>Work with multinational corporations, consulting firms, or tech startups</li>
              <li>Develop business intelligence solutions for decision-making and automation</li>
              <li>Obtain certifications like AWS Business Analyst, Google Data Analytics, or PMI-PBA</li>
              <li>Stay updated with industry trends and participate in business hackathons</li>
            </ul>
          </div>

          <div className="flex w-full md:w-auto items-end">
            <Image
              src="https://francisxavier.ac.in/cs-content/uploads/blog_2024/blog/csbs_blog.jpg"
              alt="Computer Science & Business Systems"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

    </div>
  );
}