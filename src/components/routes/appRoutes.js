import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import Profile from "../profile/Profile";

function appRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default appRoutes;
