import React from "react";
import Navbar from "../components/shared/Navbar";
import SideSection from "../components/shared/Sidebar/SideSection";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileWelcome from "../components/profile/ProfileWelcome";
import CarInformation from "../components/profile/CarInformation";
import ProfileInformation from "../components/profile/ProfileInformation";
import PlatformSetting from "../components/profile/PlatformSetting";

const Profile = () => {
  return (
    <div className="w-full mx-auto min-h-screen flex items-start justify-start">
      <div className="border-r border-white/60">
        <SideSection />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="mx-3 mt-4">
          <div>
            <ProfileHeader />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5  gap-4 mt-4">
            <div className="lg:h-[333px] h-full md:col-span-1 col-span-2">
              <ProfileWelcome />
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:h-[333px] h-full">
              <CarInformation />
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:h-[333px] h-full ">
              <ProfileInformation />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="lg:col-span-1 col-span-5">
              <PlatformSetting />
            </div>
            <div className="lg:col-span-4 col-span-5 bg-red-600">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
