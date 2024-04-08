import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test/Test";
import Info from "../pages/Test/Info";
import Login from "../pages/auth/Login";
import TestColors from "../pages/Test/TestColors";
import Search from "../pages/Search";
import Explore from "../pages/Explore";
import Reels from "../pages/Reels";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Create from "../pages/Create";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Home from "../pages/Home/Home";
import CompleteProfile from "../pages/CompleteProfile";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/test-colors" element={<TestColors />} />
        <Route path="/info" element={<Info />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user-details" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
};

export default Router;
