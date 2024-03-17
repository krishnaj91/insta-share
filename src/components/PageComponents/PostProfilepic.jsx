import React from "react";

const PostProfilepic = ({ imageUrl, mySize }) => {
  const size = mySize;
  return (
      <div>
        <img
          src={imageUrl}
          className="profile-card-pic cursor-pointer"
          style={{ height: size, width: size }}
        />
      </div>
  );
};

export default PostProfilepic;
