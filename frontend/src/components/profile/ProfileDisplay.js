import React, { useEffect, useState } from "react";
import Divider from "../Divider";
import AxiosInstance from "../../axiosInstance";

const ProfileDisplay = ({ setEmailVerified, setIsVerified }) => {
  const [user, setUser] = useState({});
  const [length, setLength] = useState(0);
  const [token, setToken] = useState("");
  const [addedCuisines, setAddedCuisines] = useState([]);

  useEffect(() => {
    if (token) setIsValidated(true);
  }, [token]);

  // Verify the Existence of Data for further processing
  function verifyData() {
    if (JSON.parse(localStorage.getItem("data"))) {
      var data = JSON.parse(localStorage.getItem("data"));
      return data;
    }
  }

  // Upload Image to Backend
  const uploadProfileImage = async (e) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const data = verifyData();

    const { _id } = data;
    try {
      const response = await AxiosInstance.put(
        `/users/updateprofile/${_id}`,
        formData
      );
      setIsLoading(false);
      const { data } = response;
      const { message } = data;
      toast.success(message);
    } catch (error) {
      setIsLoading(false);

      toast.error("An error occured");
    }
  };

  // Get All Added Cuisines by the User
  useEffect(() => {
    const data = verifyData();
    const { _id } = data;
    try {
      (async function () {
        const response = await AxiosInstance.get(
          `/cuisines/getaddedcuisines/${_id}`
        );
        const { data } = response;
        const { cuisines } = data;
        setAddedCuisines(cuisines);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [addedCuisines]);

  // Get the total number of Added Cuisines
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("data"))) {
      var data = JSON.parse(localStorage.getItem("data"));
    }

    const { _id } = data;
    const addedCuisines = async () => {
      try {
        const response = await AxiosInstance.get(
          `/cuisines/getcuisinesno/${_id}`
        );
        const { data } = response;
        const { length } = data;
        setLength(length);
      } catch (error) {}
    };

    addedCuisines();
  }, [length]);

  // Fetch UserDetails from the Database
  useEffect(() => {
    try {
      (async function () {
        const data = verifyData();
        const { _id } = data;
        const token = localStorage.getItem("token");

        const response = await AxiosInstance.get(`/users/getuser/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Start2");
        console.log(response);

        const { success, userData } = response.data;
        console.log(userData.verified);
        if (userData.verified) {
          setEmailVerified(true);
        }
        if (success) {
          setUser(userData);
          setIsVerified(userData.verified);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  return (
    <section className="profile_details">
      <div className="profile_details_wrapper">
        <div className="profile_grid">
          <div className="profile-image">
            <img
              src={user?.profilePic}
              className="profile__image"
              alt="This is a profile image"
            />

            <label htmlFor="image-photo" className="chooseimage">
              Choose Image
            </label>

            <input
              type="file"
              onChange={uploadProfileImage}
              id="image-photo"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className="profile-details-con">
            <h1 className="profile-name">{user?.fullName}</h1>
            <p className="instance-details">User</p>
            <Divider />
            <h1 className="added-cuisine">Number of Added Cuisine</h1>
            <p className="instance-details">{length}</p>
            <Divider />
            <h1>Added Categories</h1>
            <p className="instance-details">
              {addedCuisines.map((cuisine) => (
                <span>{cuisine}</span>
              ))}
            </p>
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDisplay;
