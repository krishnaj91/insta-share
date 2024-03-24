import React, { useState } from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import PostsData from "../../assets/__mockData__/PostsData.json";
import { useDispatch, useSelector } from "react-redux";
import PostProfilepic from "../../components/PageComponents/PostProfilepic";
import Comments from "./Comments";
import { fetchComments } from "../../redux/actions/homePageActions";

const Posts = () => {
  const dispatch = useDispatch();
  const { size, postProfileSize } = useSelector((state) => state.layout);
  const [loading, setLoading] = useState(true);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState([]);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleCommentsOpen = (item) => {
    setCommentsVisible(true);
    dispatch(fetchComments(item.user_id));
    setSelectedComment(item);
  };

  const handleCommentsClose = () => {
    setCommentsVisible(false);
    setSelectedComment([]);
  };

  return (
    <div>
      <div className="flex flex-column align-items-center justify-content-center gap-4 mb-5">
        {PostsData.map((item) => (
          <div
            className="post-card border-bottom-1 border-200"
            key={item.post_id}
          >
            <div className="flex align-items-center justify-content-between m-3">
              <div className="flex align-items-center gap-3">
                <PostProfilepic
                  imageUrl={item.userpic}
                  mySize={postProfileSize}
                />
                <div className="font-semibold main-text">{item.username}</div>
              </div>
              <div>
                <i className="pi pi-ellipsis-h my-page-icon pr-2 cursor-pointer md:block hidden" />
                <i className="pi pi-ellipsis-v my-page-icon pr-2 cursor-pointer md:hidden block" />
              </div>
            </div>
            <div>
              {loading && <div className="skeleton"></div>}
              <Image
                src={item.post}
                alt={item.alt}
                downloadIcon={true}
                downloadable={true}
                imageClassName={!loading ? "post-img" : "hidden"}
                preview
                onLoad={handleLoad}
              />
            </div>
            <div className="flex align-items-center justify-content-between m-3">
              <div className="flex gap-3">
                <i className="pi pi-heart my-page-icon cursor-pointer" />
                <i
                  className="pi pi-comment my-page-icon cursor-pointer"
                  onClick={() => handleCommentsOpen(item)}
                />
                <i className="pi pi-share-alt my-page-icon cursor-pointer" />
              </div>
              <i className="pi pi-bookmark my-page-icon pr-2 cursor-pointer" />
            </div>
            <div className="font-semibold	main-text mt-2 mx-3">
              {item.likeCount} likes
            </div>
            <div className="post-width mx-3">
              <p className="para-text font-normal">{item.description}</p>
            </div>
            <div
              className="font-base cursor-pointer sub-text m-3"
              onClick={() => handleCommentsOpen(item)}
            >
              View all {item.totalComments} comments
            </div>
            <div className="post-comment flex justify-content-between align-items-center mt-1 mx-3">
              <div>
                <input
                  placeholder="Add a comment ..."
                  type="text"
                  className="input-comment"
                />
              </div>
              <div>
                <Button label="POST" className="my-col" size={size} text />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hide-mobile">
        <Comments
          visible={commentsVisible}
          setVisible={setCommentsVisible}
          onHide={handleCommentsClose}
          userData={selectedComment}
        />
      </div>
      
    </div>
  );
};

export default Posts;
