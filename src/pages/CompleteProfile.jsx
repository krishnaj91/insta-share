import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/profile.scss";
import { Button } from "primereact/button";
import Status from "./Home/Status";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";
import User from "../assets/user.jpg";

const CompleteProfile = () => {
  const userData = {
    userID: "8j3F9dE2k5",
    userName: "Sophia_Rodriguezzz",
    fullName: "Sophia Rodriguez",
    userProfilePicture: User,
    isPrivate: false,
    totalPosts: 25,
    totalFollowers: 1000,
    totalFollowing: 500,
    biography: "Let it be ✨ DM for Collaboration & Promotions 📩",
    links: "https://randomuser.me",
  };
  const [skeleton, setSkeleton] = useState(true);

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
              <div className="flex align-items-center gap-3">
                <div>{userData.userName}</div>
                <div>
                  <Button label="Follow" size="small" />
                </div>
                <div>
                  <Button label="Message" size="small" />
                </div>
                <div>
                  <i className="pi pi-ellipsis-h" />
                </div>
              </div>
              <div className="flex align-items-center gap-3">
                <div>{userData.totalPosts} posts</div>
                <div>{userData.totalFollowers} followers</div>
                <div>{userData.totalFollowers} following</div>
              </div>
              <div>{userData.fullName}</div>
              <div>{userData.biography}</div>
              <div>{userData.links}</div>
            </div>
          </div>
          <div className="m-5">
            <Status />
          </div>
          <hr className="mx-5" />
          <div className="flex align-ites-center justify-content-center gap-5 my-3">
            <div>POSTS</div>
            <div>REELS</div>
            <div>TAGGED</div>
          </div>
          <div className="mx-5">
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
            <img src={User} className="profile-post-img" />
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default CompleteProfile;
