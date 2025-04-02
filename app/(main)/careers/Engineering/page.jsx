import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeftFromLineIcon, BotIcon, CogIcon, HouseIcon, LaptopIcon, ListCheckIcon, MicrochipIcon, Rotate3DIcon, TagIcon, WaypointsIcon, WrenchIcon } from "lucide-react";

export default function Engineering() {
  return (
    <section className="career-options p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
    <nav className="text-gray-600 dark:text-gray-300 mt-2">
        <Link href="/dashboard" className="hover:underline flex items-center">
            <ArrowLeftFromLineIcon className="mr-2" />
            Go Back
        </Link>
    </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Engineering Careers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Computer Science & IT */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://www.kzu.ac.in/storage/blogs/176621535573709797637.jpg"
              alt="Computer Science & IT"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Computer Science Engineering and Information Technology
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <LaptopIcon className="mr-2" /> Develop software applications and systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <TagIcon className="mr-2" /> Specializations: Web, Mobile, Embedded Systems.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Engineering/cse" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Specializations of Computer Science and Engineering */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/11/Computer-Science-Courses.jpg"
              alt="Specializations of Computer Science and Engineering"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                Specializations of Computer Science and Engineering 
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <BotIcon className="mr-2" /> Each specialization offers unique career opportunities in cutting-edge technology domains.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <WaypointsIcon className="mr-2" /> Specializations: Artificial Intelligence and Machine Learning, Data Science, Cyber Security, Internet of Things, Business Systems.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Engineering/cse_special" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Electronics & Communication Engineering */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://www.bangaloreadmission.com/uploads/1/2/7/9/1279976/1403542694.jpg"
              alt="Electronics & Communication Engineering"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Electronics & Communication Engineering
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <MicrochipIcon className="mr-2" /> Explore electronic devices and communication systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ListCheckIcon className="mr-2" /> Specializations: VLSI, Embedded Systems, Wireless.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Engineering/ece" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Civil Engineering */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQEAt8AozTTfZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713671901756?e=2147483647&v=beta&t=n0Ih1tFfrFMqPJNbEyfqH_-sSxNtvkZ63JyeZDC_b6g"
              alt="Civil Engineering"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Civil Engineering
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <HouseIcon className="mr-2" /> Design and supervise infrastructure projects.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <Rotate3DIcon className="mr-2" /> Specializations: Structural, Environmental, Transportation.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Engineering/civil" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Mechanical Engineering */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
          <img
              src="https://cdn.itm.ac.in/2024/05/male-worker-factory.webp"
              alt="Mechanical Engineering"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Mechanical Engineering
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <CogIcon className="mr-2" /> Design and develop mechanical systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <WrenchIcon className="mr-2" /> Specializations: Automotive, Aerospace, Robotics.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Engineering/mechanical" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}