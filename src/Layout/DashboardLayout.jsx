import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Header/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 p-7 lg:p-12">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 lg:bg-transparent text-base-content">
            <li>
              <Link to="/dashboard" className="font-bold">
                My Appointments
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers" className="font-bold">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor" className="font-bold">
                    Add a Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors" className="font-bold">
                    Manage Doctors
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
