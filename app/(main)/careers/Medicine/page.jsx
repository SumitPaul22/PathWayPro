import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { AmbulanceIcon, ArrowLeftFromLineIcon, BoneIcon, HeartIcon, MicroscopeIcon, PillIcon, StethoscopeIcon } from "lucide-react";

export default function Medicine() {
  return (
    <section className="career-options p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
    <nav className="text-gray-600 dark:text-gray-300 mt-2">
        <Link href="/dashboard" className="hover:underline flex items-center">
            <ArrowLeftFromLineIcon className="mr-2" />
            Go Back
        </Link>
    </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Medical Career Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Clinical Medicine */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-female-doctors-nurses_380164-71572.jpg"
              alt="Clinical Medicine"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Clinical Medicine (Doctors & Specialists)
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <StethoscopeIcon className="mr-2" /> Diagnose, treat, and prevent diseases.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <StethoscopeIcon className="mr-2" /> Specializations: Surgery, Pediatrics, Cardiology, Neurology.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Medicine/clinical-medicine" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Dentistry */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://media.istockphoto.com/id/510634014/photo/beautiful-girl-at-the-dentist.jpg?s=612x612&w=0&k=20&c=ayD_tMv4ndZMYH6-r3xHQWVgTcuS92Q98ZWK57HqAf8="
              alt="Dentistry"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Dentistry (Oral Healthcare)
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <HeartIcon className="mr-2" /> Diagnose and treat dental issues.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <BoneIcon className="mr-2" /> Specializations: Orthodontics, Endodontics, Prosthodontics.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Medicine/dentistry" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Pharmaceutical Sciences */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://ijpras.com/assets/main/bg1.jpg"
              alt="Pharmaceutical Sciences"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Pharmaceutical Sciences
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <PillIcon className="mr-2" /> Research and develop medicines.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <PillIcon className="mr-2" /> Specializations: Pharmacology, Toxicology, Clinical Research.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Medicine/pharmaceutical-sciences" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Nursing & Paramedical Sciences */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://www.farmersweekly.co.nz/wp-content/uploads/2023/08/nurse-.jpeg"
              alt="Nursing & Paramedical Sciences"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Nursing & Paramedical Sciences
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <AmbulanceIcon className="mr-2" /> Provide patient care and support doctors.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <AmbulanceIcon className="mr-2" /> Specializations: Nursing, Radiology, Physiotherapy.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Medicine/nursing-paramedical" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

        {/* Biomedical & Biotechnology Engineering */}
        <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src="https://img.freepik.com/free-photo/research-innovation-items-world-science-day-celebration_23-2151812447.jpg"
              alt="Biomedical & Biotechnology Engineering"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
              Biomedical & Biotechnology Engineering
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <MicroscopeIcon className="mr-2" /> Innovate medical devices & research genetics.
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <MicroscopeIcon className="mr-2" /> Specializations: Bioinformatics, Genetic Engineering.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/careers/Medicine/biomedical-biotech" className="text-violet-600 hover:underline dark:text-violet-300">
              Explore Now &gt;
            </Link>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
