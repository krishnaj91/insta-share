import React, { useRef, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import PostsData from "../assets/__mockData__/PostsData.json";
import StatusData from "../assets/__mockData__/StatusData.json";
import { useSelector } from "react-redux";
import PostProfilepic from "../components/PageComponents/PostProfilepic";

const Home = () => {
  const { size, postProfileSize } = useSelector((state) => state.layout);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -150, // adjust the value as needed for scrolling distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 150, // adjust the value as needed for scrolling distance
        behavior: "smooth",
      });
    }
  };

  return (
    <MainLayout>
      <div className="flex align-items-center">
        <i
          className="pi pi-angle-left text-4xl cursor-pointer  hidden sm:block"
          onClick={scrollLeft}
        />
        <div className="status-container" ref={containerRef}>
          {StatusData.map((status) => (
            <div className="status-profile-pic-container" key={status.id}>
              <img className="status-profile-pic" src={status.userPic} />
            </div>
          ))}
        </div>
        <i
          className="pi pi-angle-right text-4xl cursor-pointer  hidden sm:block"
          onClick={scrollRight}
        />
      </div>
      <div className="flex flex-column align-items-center justify-content-center gap-4">
        {PostsData.map((item) => (
          <div className="post-card border-bottom-1 border-200" key={item.id}>
            <div className="flex align-items-center justify-content-between m-3">
              <div className="flex align-items-center gap-3">
                <PostProfilepic
                  imageUrl={item.userpic}
                  mySize={postProfileSize}
                />
                <div className="font-semibold main-text">{item.username}</div>
              </div>
              <div>
                <i className="pi pi-ellipsis-h md:text-2xl text-4xl pr-2 cursor-pointer md:block hidden" />
                <i className="pi pi-ellipsis-v md:text-2xl text-4xl pr-2 cursor-pointer md:hidden block" />
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
                <i className="pi pi-heart md:text-2xl text-4xl cursor-pointer" />
                <i className="pi pi-comment md:text-2xl text-4xl cursor-pointer" />
                <i className="pi pi-share-alt md:text-2xl text-4xl cursor-pointer" />
              </div>
              <i className="pi pi-bookmark md:text-2xl text-4xl pr-2 cursor-pointer" />
            </div>
            <div className="font-semibold	main-text mt-2 mx-3">
              {item.likeCount} likes
            </div>
            <div className="post-width mx-3">
              <p className="para-text font-normal">{item.description}</p>
            </div>
            <div className="font-base cursor-pointer sub-text m-3">
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

        <div className="post-card border-bottom-1 border-400 py-3">
          <div className="flex align-items-center justify-content-between py-1">
            <div className="flex align-items-center gap-2">
              <img
                // src="https://i.pinimg.com/736x/8d/c7/7c/8dc77c32cbbe0966a30be49ffe6f8f38.jpg"
                alt="om"
                className="profile-card-pic cursor-pointer"
              />
              <div className="font-semibold text-lg">Lord Ganesh</div>
            </div>
            <div>
              <i className="pi pi-ellipsis-h md:text-2xl text-4xl pr-2 cursor-pointer" />
            </div>
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/736x/8d/c7/7c/8dc77c32cbbe0966a30be49ffe6f8f38.jpg"
              alt="Image"
              downloadIcon={true}
              downloadable={true}
              imageClassName="post-img"
              preview
            />
          </div>
          <div className="flex align-items-center justify-content-between py-1">
            <div className="flex gap-3">
              <i className="pi pi-heart md:text-2xl text-4xl cursor-pointer" />
              <i className="pi pi-comment md:text-2xl text-4xl cursor-pointer" />
              <i className="pi pi-share-alt md:text-2xl text-4xl cursor-pointer" />
            </div>
            <i className="pi pi-bookmark md:text-2xl text-4xl pr-2 cursor-pointer" />
          </div>
          <div className="post-width">
            <p className="text-base text-600">OM namahai shivaiah</p>
          </div>
          <div className="font-base my-theme-color cursor-pointer py-2">
            View all 15 comments
          </div>
          <div className="post-comment flex justify-content-between align-items-center">
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
      </div>
      <div></div>
    </MainLayout>
  );
};

export default Home;
