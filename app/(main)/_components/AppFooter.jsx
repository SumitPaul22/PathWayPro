import React from "react";
import { MapPinIcon, MailIcon, PhoneIcon } from "lucide-react";

function AppFooter() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200">
      <p className="mb-2">© 2025 PathWayPro. All rights reserved.</p>
      
      {/* Contact Details */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
        
        {/* Address */}
        <div className="flex items-center">
          <MapPinIcon className="w-4 h-4 mr-2" />
          <span>EM-4/1 Sector V, Bidhannagar, Kolkata</span>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <MailIcon className="w-4 h-4 mr-2" />
          <span>contact@pathwaypro.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center">
          <PhoneIcon className="w-4 h-4 mr-2" />
          <span>+91 987654321</span>
        </div>

      </div>
    </div>
  );
}

export default AppFooter;
