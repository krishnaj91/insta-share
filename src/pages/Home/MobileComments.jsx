import React, { useState } from "react";
import MobileDownViewer from "../../components/Views/MobileDownViewer";
import { useSelector } from "react-redux";
import PostProfilepic from "../../components/PageComponents/PostProfilepic";

const MobileComments = ({ visible, onHide, userData }) => {
  const commentsData = useSelector((state) => state.home.commentsData);
  const { isDark } = useSelector((state) => state.layout);
  const [fullHeight, setFullHeight] = useState(false);

  console.log(fullHeight);

  return (
    <MobileDownViewer visible={visible} onHide={onHide} height={fullHeight}>
      <div className={isDark ? "comment-dark h-full" : "comment-light h-full"}>
        <div className="flex justify-content-between align-items-center p-3 px-5 comment-head-bg border-round-top-3xl">
          <i
            className={
              fullHeight
                ? "pi pi-arrow-down text-lg cursor-pointer"
                : "pi pi-arrow-up text-lg cursor-pointer"
            }
            onClick={() => setFullHeight(!fullHeight)}
          />

          <div className="text-center text-xl font-semibold">Comments</div>
          <i className="pi pi-times text-lg cursor-pointer" onClick={onHide} />
        </div>
        <div
          className="px-3 overflow-y-scroll h-full comment-body-bg pt-4"
          style={{ paddingBottom: "150px" }}
        >
          {commentsData &&
            commentsData.map((items) => (
              <div key={items.user_id}>
                <div className="flex align-items-start gap-3 mb-4">
                  <PostProfilepic imageUrl={items.userpic} mySize="50px" />
                  <div>
                    <div className="text-lg font-semibold cursor-pointer mb-1">
                      {items.username}
                    </div>
                    <div className="text-xl font-light">{items.comment}</div>
                    <div className="text-xs text-500">{items.commented_at}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="fixed bottom-0 w-12 p-3 comment-footer-bg">
          <div className="flex align-items-center gap-3">
            <PostProfilepic imageUrl={userData.userpic} mySize="50px" />
            <input
              placeholder="Add a comment ..."
              type="text"
              className="input-comment w-9 text-2xl"
              autoFocus
            />
            <div className="flex align-items-center justify-content-center border-circle p-2 bg-primary">
              <i className="pi pi-send cursor-pointer text-2xl p-1" />
            </div>
          </div>
        </div>
      </div>
    </MobileDownViewer>
  );
};

export default MobileComments;
