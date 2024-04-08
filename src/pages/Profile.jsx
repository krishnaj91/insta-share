import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/profile.scss";
import { Button } from "primereact/button";
import Status from "./Home/Status";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";
import DeafultUser from "../assets/deafult-user.png";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = {
    userID: "8j3F9dE2k5",
    userName: "Krishna_jkg",
    fullName: "Krishna | Coder | Tech | Frontend Developer",
    userProfilePicture: DeafultUser,
    isPrivate: false,
    totalPosts: 25,
    totalFollowers: 1000,
    totalFollowing: 500,
    biography: "Let it be ✨ DM for Collaboration & Promotions 📩",
    links: "https://instaashare.netlify.app",
  };
  const [skeleton, setSkeleton] = useState(true);
  const { size } = useSelector((state) => state.layout);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 1500);
  }, []);

  return (
    <MainLayout>
      {skeleton ? (
        <div>
          <ProfileSkeleton />
        </div>
      ) : (
        <div className="w-full h-full profile-container mt-3">
          <div className="flex align-ites-center">
            <div className="col-4 flex align-items-center justify-content-center">
              <img
                src={userData.userProfilePicture}
                alt="user"
                className="profile-image"
              />
            </div>
            <div className="col-8 overflow-x-hidden">
              <div className="flex align-items-center gap-3 mb-3">
                <div className="main-text font-bold">{userData.userName}</div>
                <div>
                  <Button
                    label="Edit Profile"
                    size="small"
                    severity="secondary"
                  />
                </div>
                <div>
                  <Button
                    label="View Archive"
                    size="small"
                    severity="secondary"
                  />
                </div>
              </div>
              <div className="flex align-items-center gap-3 mb-2">
                <div className="sub-text">
                  <span className="font-semibold">{userData.totalPosts}</span>{" "}
                  posts
                </div>
                <div className="text-xl cursor-pointer">
                  <span className="font-semibold">
                    {userData.totalFollowers}
                  </span>{" "}
                  followers
                </div>
                <div className="sub-text cursor-pointer">
                  <span className="font-semibold">
                    {userData.totalFollowing}
                  </span>{" "}
                  following
                </div>
              </div>
              <div className="sub-text font-base mb-2">{userData.fullName}</div>
              <div className="mb-2">
                <p className="text-500">Web Developer</p>
                <li className="para-text">Sharing Coding tips and tricks</li>
                <li className="para-text">Source Code - krishnaj91</li>
              </div>
              <div>
                <a href={userData.links} target="_blank">
                  {userData.links}
                </a>
              </div>
            </div>
          </div>
          <div className="m-5">
            <Status />
          </div>
          <hr className="mx-5" />
          <div className="flex align-ites-center justify-content-center gap-5 my-3">
            <div>
              <i className="pi pi-images" /> POSTS
            </div>
            <div>SAVED</div>
            <div>TAGGED</div>
          </div>
          <div className="flex flex-column justify-content-center align-items-center gap-3 my-5 py-5">
            <div className="border border-1 border-circle p-3">
              <i className="pi pi-camera text-4xl font-light" />
            </div>
            <div>Share photos</div>
            <div>When you share photos, they will appear on your profile.</div>
            <div className="my-link">Share your firsh photo</div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Profile;
