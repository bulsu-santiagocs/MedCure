import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Bell,
  ShoppingCart,
  Users,
  Settings,
  ChevronDown,
} from 'lucide-react';

// A helper component to manage the active state of icons and text
const SidebarLink = ({ to, icon: Icon, text, children }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const hasSubMenu = children != null;

  const linkClasses = (isActive) =>
    `flex items-center justify-between px-3 py-2.5 my-1 rounded-md text-sm transition-colors ${
      isActive
        ? 'bg-sidebar-active-bg text-sidebar-active-text'
        : 'text-sidebar-text hover:bg-sidebar-item-hover-bg'
    }`;

  const iconClasses = (isActive) =>
    isActive ? 'text-sidebar-active-text' : 'text-sidebar-icon';

  if (hasSubMenu) {
    return (
      <div>
        <div
          className={linkClasses(false) + ' cursor-pointer'}
          onClick={() => setSubMenuOpen(!isSubMenuOpen)}
        >
          <div className="flex items-center">
            {/* FIX: Conditionally render Icon only if it exists */}
            {Icon && <Icon size={20} className={iconClasses(false)} />}
            <span className={Icon ? 'ml-3 font-medium' : 'font-medium'}>{text}</span>
          </div>
          <ChevronDown
            size={16}
            className={`transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {isSubMenuOpen && <div className="pl-6 mt-1">{children}</div>}
      </div>
    );
  }

  return (
    // FIX: Added 'end' prop to ensure only the exact path is matched as active
    <NavLink to={to} end>
      {({ isActive }) => (
        <div className={linkClasses(isActive)}>
          <div className="flex items-center">
            {/* FIX: Conditionally render Icon only if it exists */}
            {Icon && <Icon size={20} className={iconClasses(isActive)} />}
            <span className={Icon ? 'ml-3 font-medium' : 'font-medium'}>{text}</span>
          </div>
        </div>
      )}
    </NavLink>
  );
};


const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-sidebar-bg border-r border-gray-200 shadow-sm transition-all duration-300 ${
        isOpen ? 'w-60' : 'w-0'
      } overflow-hidden flex-shrink-0`}
    >
      <div className="flex flex-col h-full">
         <div className="flex items-center justify-center h-16 border-b border-gray-200 flex-shrink-0">
            <div className="bg-gray-900 p-2 rounded-full">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </div>
        </div>
        {/* FIX: Corrected all 'to' paths to be nested under /dashboard */}
        <nav className="flex-1 px-2 py-4">
          <SidebarLink icon={LayoutDashboard} text="Dashboard" to="/dashboard" />
          <SidebarLink icon={Briefcase} text="Management">
            <SidebarLink text="Users" to="/dashboard/management/users" />
            <SidebarLink text="Products" to="/dashboard/management/products" />
          </SidebarLink>
          <SidebarLink icon={Bell} text="Notification">
             <SidebarLink text="All" to="/dashboard/notifications/all" />
             <SidebarLink text="Unread" to="/dashboard/notifications/unread" />
          </SidebarLink>
          <SidebarLink icon={ShoppingCart} text="Point Of Sales">
             <SidebarLink text="New Sale" to="/dashboard/pos/new" />
             <SidebarLink text="History" to="/dashboard/pos/history" />
          </SidebarLink>
          <SidebarLink icon={Users} text="Contacts" to="/dashboard/contacts" />
          <SidebarLink icon={Settings} text="Settings" to="/dashboard/settings" />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;