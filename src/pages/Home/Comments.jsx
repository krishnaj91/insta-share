import React from "react";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import { Avatar } from "primereact/avatar";

const Comments = ({ visible, onHide, userData }) => {
  const commentsData = useSelector((state) => state.home.commentsData);
  const { size } = useSelector((state) => state.layout);

  return (
    <div>
      <Dialog
        visible={visible}
        style={{ width: "80vw" }}
        onHide={onHide}
        dismissableMask={true}
        blockScroll={true}
        showHeader={false}
        className="relative"
      >
        <div className="flex">
          <div className="md:w-5 w-6">
            <div className="sticky top-0 w-full">
              <img src={userData.post} className="w-full" />
            </div>
          </div>
          <div className="md:w-7 w-6 overflow-y-auto">
            {commentsData &&
              commentsData.map((items) => (
                <div key={items.user_id}>
                  <div className="mb-3">
                    <div className="flex align-items-start gap-3">
                      <Avatar
                        image={items.userpic}
                        size={size}
                        shape="circle"
                      />
                      <div>
                        <div className="sub-text">{items.username}</div>
                        <div className="para-text">{items.comment}</div>
                        <div className="text-sm">{items.commented_at}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Comments;
