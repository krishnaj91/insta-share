import React from "react";
import { useSelector } from "react-redux";
import CustomDialog from "../../components/Views/Dialog";
import PostProfilepic from "../../components/PageComponents/PostProfilepic";

const Comments = ({ visible, onHide, userData }) => {
  const commentsData = useSelector((state) => state.home.commentsData);
  const { size, isDark } = useSelector((state) => state.layout);

  return (
    <div>
      <CustomDialog visible={visible} onHide={onHide}>
        <div className="flex h-full">
          <div className="">
            <img src={userData.post} className="comment-img h-full" />
          </div>
          <div className={isDark ? "comment-dark" : "comment-light"}>
            <div className="comment-head-height comment-head-bg flex justify-content-between align-items-center px-3">
              <div className="h-full flex align-items-center gap-3">
                <PostProfilepic imageUrl={userData.userpic} mySize="45px" />
                <div className="font-semibold">{userData.username}</div>
              </div>
              <div>
                <i className="pi pi-ellipsis-h text-xl pr-2 cursor-pointer" />
              </div>
            </div>
            <div className="comment-body-height comment-body-bg p-3">
              {commentsData &&
                commentsData.map((items) => (
                  <div key={items.user_id}>
                    <div className="mb-3">
                      <div className="flex align-items-start gap-3">
                       
                        <PostProfilepic imageUrl={items.userpic} mySize="45px" />
                        <div>
                          <div className="text-xl cursor-pointer">{items.username}</div>
                          <div className="text-sm">{items.comment}</div>
                          <div className="text-xs text-500">{items.commented_at}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="comment-footer-height comment-footer-bg">
              <div className="flex align-items-center justify-content-between px-3 pt-3 pb-2">
                <div className="flex gap-3">
                  <i className="pi pi-heart text-2xl cursor-pointer" />
                  <i className="pi pi-comment text-2xl cursor-pointer" />
                  <i className="pi pi-share-alt text-2xl cursor-pointer" />
                </div>
                <i className="pi pi-bookmark text-2xl pr-2 cursor-pointer" />
              </div>
              <div className="px-3 pb-3">{userData.likeCount} likes</div>
              <div className="px-3 pb-2 flex align-items-center justify-content-between">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-discord text-lg cursor-pointer" />
                  <input
                    placeholder="Add a comment ..."
                    type="text"
                    className="input-comment"
                    style={{ width: "400px" }}
                  />
                </div>
                <div>
                  <div>Post</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default Comments;
