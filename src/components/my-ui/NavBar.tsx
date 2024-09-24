// NavBar.tsx (Updated)
import React from "react";
import SearchBar from "@/components/my-ui/SearchBar";
import HamburgerMenu from "@/components/my-ui/HamburgerMenu";
import ProfileAvatar from "@/components/my-ui/ProfileAvatar";

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center space-x-3">
          <HamburgerMenu />
          <div className="flex items-end space-x-1 h-full">
            <span className="text-xl text-gray-700">
              Teamdocs
            </span>
          </div>
        </div>
        <SearchBar />
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default NavBar;
