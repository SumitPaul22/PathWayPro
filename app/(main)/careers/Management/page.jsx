import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { BriefcaseIcon, ChartBarIcon, CoinsIcon, UsersIcon, ClipboardListIcon, ArrowLeftFromLineIcon } from "lucide-react";

export default function Management() {
  return (
    <section className="career-options p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
    <nav className="text-gray-600 dark:text-gray-300 mt-2">
        <Link href="/dashboard" className="hover:underline flex items-center">
            <ArrowLeftFromLineIcon className="mr-2" />
            Go Back
        </Link>
    </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Management Careers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Business Administration */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://clickpyramidltd.com/wp-content/uploads/2022/05/header-mobile-Business04.jpg"
              alt="Business Administration"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Business Administration
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <BriefcaseIcon className="mr-2" /> Qualification: Bachelor of Business Administration (BBA)
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ClipboardListIcon className="mr-2" /> Category: Management
            </p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 3 Years</p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Management/business-administration" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Project Management */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-124272.jpg"
              alt="Project Management"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Project Management
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ChartBarIcon className="mr-2" /> Qualification: Master of Business Administration (MBA)
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ClipboardListIcon className="mr-2" /> Category: Management
            </p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 3-4 Years</p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Management/project-management" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Human Resources Management */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://cdn.papershift.com/20220321164508/human-resource-management-scaled-910x500.jpeg"
              alt="Human Resources Management"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Human Resources Management
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <UsersIcon className="mr-2" /> Qualification: Master's in Human Resources
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ClipboardListIcon className="mr-2" /> Category: Management
            </p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 2 Years</p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Management/hr-management" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Marketing Management */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://cymrumarketing.com/wp-content/uploads/2023/02/Marketing-management.jpg"
              alt="Marketing Management"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Marketing Management
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ChartBarIcon className="mr-2" /> Qualification: Master's in Marketing
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ClipboardListIcon className="mr-2" /> Category: Management
            </p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 2 Years</p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Management/marketing-management" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Financial Management */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://navi.com/blog/wp-content/uploads/2022/06/financial-management.jpg"
              alt="Financial Management"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Financial Management
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <CoinsIcon className="mr-2" /> Qualification: Master's in Finance
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <ClipboardListIcon className="mr-2" /> Category: Management
            </p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 2 Years</p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Management/financial-management" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
