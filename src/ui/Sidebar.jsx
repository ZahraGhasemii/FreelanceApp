import { NavLink } from "react-router-dom";
import { HiHome, HiCollection } from "react-icons/hi";
import { Children } from "react";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomeNavLink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomeNavLink>
        </li>
        <li>
          <CustomeNavLink to="/owner/projects">
            <HiCollection />
            <span> پروژه ها</span>
          </CustomeNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomeNavLink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} bg-primary-100/50 text-primary-900`
          : `${navLinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
