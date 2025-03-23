import React from "react";
import Navbar from "../components/shared/Navbar";
import SideSection from "../components/shared/Sidebar/SideSection";
import ProfileHeader from "../components/profile/ProfileHeader";

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
        </div>
      </div>
    </div>
  );
};

export default Profile;
