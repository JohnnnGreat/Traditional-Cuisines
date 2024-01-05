import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Layout = ({ children }) => {
  const navigate = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="layout">
      <div className={`layout__grid ${navOpen && "grid-wide"}`}>
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
            <div
              onClick={() => {
                localStorage.setItem("adminLoggedIn", false);
                navigate.push("/");
              }}
              className="admin-logout"
            >
              <button>Logout</button>
            </div>
          </div>
        </div>
        <div className="layout_second">
          <button
            className="ad-btn"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <RiMenu3Fill size={30} />
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
