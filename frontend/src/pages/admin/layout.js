import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__grid">
        <div className="layout_first">
          <div className="first_l_container">
            <h1 className="admin-header">Admin Dashboard</h1>

            <nav>
              <ul>
                <li>
                  <Link href="/admin">Home</Link>
                </li>
                <li>
                  <Link href="/admin/broadcast">Make a Broadcast</Link>
                </li>
                <li>
                  <Link href="/admin/users">Users</Link>
                </li>
                <li>
                  <Link href="/admin/categories">Food Categories</Link>
                </li>
              </ul>
            </nav>
            <div className="admin-logout">
              <button>Logout</button>
            </div>
          </div>
        </div>
        <div className="layout_second">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
