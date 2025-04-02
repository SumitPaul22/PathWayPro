"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, BotIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutUs({ theme = "light" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} bg-gray-100 dark:bg-gray-900`}>

      {/* Website Description */}
      <motion.section
        className="p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800 dark:text-white mb-4"
          variants={itemVariants}
        >
          Welcome to PathWayPro
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 max-w-3xl"
          variants={itemVariants}
        >
          PathWayPro is your comprehensive career guidance platform designed to empower you with the tools and resources needed to make informed career decisions. We leverage cutting-edge AI technology and expert insights to provide personalized guidance, skill development roadmaps, and access to a wide range of career opportunities. Our mission is to help you navigate your career journey with confidence and achieve your professional goals.
        </motion.p>
      </motion.section>

      {/* Help Section */}
      <motion.section
        className="p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800 dark:text-white mb-6"
          variants={itemVariants}
        >
          How Do We Help You?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Skill Development Roadmap",
              description: "Once your career interests are identified, we provide a structured roadmap to help you develop the essential skills required for your chosen field. This includes recommended courses, certifications, and self-paced learning resources tailored to your needs.",
              image: "https://media.licdn.com/dms/image/v2/D4E12AQF9CyuysZ5iHg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1698657670492?e=2147483647&v=beta&t=nm0LiwmISviVVqOa9ZSz9wqFzpNQo7jD900hIeIe2iY",
            },
            {
              title: "Customized Career Insights",
              description: "Based on your assessment score, we provide you with a list of potential career paths that align with your strengths and interests. This guidance is rooted in data-driven insights, helping you make informed decisions about your future.",
              image: "https://www.moneypatrol.com/moneytalk/wp-content/uploads/2022/03/Financial-literacy-and-education-520x400.jpg",
            },
            {
              title: "AI-Powered Guidance",
              description: "With our AI-powered chatbot, you can have real-time conversations about career recommendations. Ask any questions you may have about potential professions, and get immediate, helpful answers.",
              image: "https://media.licdn.com/dms/image/D5612AQEiVbKmaFrmzg/article-cover_image-shrink_720_1280/0/1718601302795?e=2147483647&v=beta&t=pm4unz1kXI9KPhZdagjHRrdqpGePUKLWCI9SwJ-tvgs",
            },
            {
              title: "Internship & Job Opportunities",
              description: "Our platform connects you with internships and job opportunities aligned with your interests and skill level. With our AI-powered matching system, we ensure you find relevant roles that provide hands-on experience and help you build a strong career foundation.",
              image: "https://www.shutterstock.com/image-illustration/internet-business-technology-network-concept-260nw-2030680841.jpg",
            },
            {
              title: "Mock Tests",
              description: "To boost your confidence, we offer mock tests and AI-generated feedback. You can practice commonly asked questions in your field, receive tips on body language and communication, and refine your responses for real-world job interviews.",
              image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Capture_13_1200x768.png?size=690:388",
            },
            {
              title: "Scholarship & Financial Aid Guidance",
              description: "Education and career growth should not be hindered by financial constraints. We guide you through available scholarships, financial aid programs, and grants, helping you explore funding opportunities to support your academic and career aspirations.",
              image: "https://www.lifecarehll.com/static/images/15422166727ada7b411a0f9d892ac2bd_c6318d08a1faf0f43b1f906230ef0ab2_40060403292018.jpg",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img src={item.image} alt={item.title} width={80} height={80} className="object-cover" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white text-center mt-4">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Student Feedback */}
      <motion.section
        className="p-6 bg-violet-100 dark:bg-violet-800 rounded-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-semibold text-violet-800 dark:text-violet-200 mb-6"
          variants={itemVariants}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { quote: "PathWayPro helped me discover career paths I never knew existed. The AI-powered recommendations were spot-on!", name: "Sarah M." },
            { quote: "The mock tests were invaluable for my job interviews. I felt much more prepared and confident.", name: "David L." },
            { quote: "I found the scholarship guidance extremely helpful. I was able to secure funding for my higher education.", name: "Emily K." },
          ].map((feedback, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white dark:bg-gray-800 shadow-md">
                <CardContent className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">"{feedback.quote}"</p>
                  <p className="text-right text-gray-600 dark:text-gray-400 mt-2">- {feedback.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}