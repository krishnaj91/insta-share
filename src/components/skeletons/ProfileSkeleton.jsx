import React from "react";
import { Skeleton } from "primereact/skeleton";

const ProfileSkeleton = () => {
  return (
    <>
      <div className="w-full h-full profile-container mt-3">
        <div className="flex align-ites-center">
          <div className="col-4 flex align-items-center justify-content-center">
            <Skeleton shape="circle" size="10rem"></Skeleton>
          </div>
          <div className="col-8">
            <div className="flex gap-3 mb-3">
              <Skeleton width="6rem" height="3rem"></Skeleton>
              <Skeleton width="6rem" height="3rem"></Skeleton>
              <Skeleton width="6rem" height="3rem"></Skeleton>
              <Skeleton width="6rem" height="3rem"></Skeleton>
            </div>
            <Skeleton width="8rem" height="2rem" className="mb-3"></Skeleton>
            <Skeleton width="12rem" height="6rem" className="mb-3"></Skeleton>
            <Skeleton width="27rem" height="2rem" className="mb-3"></Skeleton>
          </div>
        </div>
        <div className="flex gap-3 mx-5 px-3 mb-3">
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
        </div>
        <hr className="m-5" />
        <div className="flex flex-wrap justify-content-center gap-3">
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
          <Skeleton size="16rem"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default ProfileSkeleton;
