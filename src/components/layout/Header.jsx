import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  MessageSquare,
  HelpCircle,
  UserCircle,
} from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const { signOut, session } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-header-bg text-gray-800 shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">

          {/* Menu Toggle */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-300 focus:outline-none"
          >
            <Menu size={20} className="text-gray-500"/>
          </button>
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sidebar-active-bg"
            />
          </div>
        </div>

        {/* Right side icons with reverted styling */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-300">
            <MessageSquare size={24} className="text-gray-500" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-300">
            <HelpCircle size={24} className="text-gray-500" />
          </button>
          <div className="relative group">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-300">
              <UserCircle size={24} className="text-gray-500" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="px-4 py-2 text-sm text-gray-700">
                {session?.user?.email}
              </div>
              <a
                href="settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <button
                onClick={handleSignOut}
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;