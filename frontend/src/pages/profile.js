import React from "react";
import Divider from "@/components/Divider";
import Image from "next/image";

const profile = () => {
  return (
    <section className="profile_details">
      <div className="profile_details_wrapper">
        <div className="profile_grid">
          <div className="profile-image">
            <Image src="" alt="This is a profile image"></Image>
          </div>
          <div className="profile-details-con">
            <h1 className="profile-name">John Ossai</h1>
            <p className="instance-details">User</p>
            <Divider />
            <h1 className="added-cuisine">Number of Added Cuisine</h1>
            <p className="instance-details">0</p>
            <Divider />
            <h1>Added Categories</h1>
            <p className="instance-details">None</p>
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default profile;
