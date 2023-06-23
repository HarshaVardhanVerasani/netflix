import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AVATAR from "../../assets/Netflix-avatar.png";
import "./profile.css";
import { logOut } from "../redux/slice";

function Profile() {
  const user = useSelector((store) => store.netflix.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/")
    dispatch(logOut(null));
    sessionStorage.clear(0)
  }

  return (
    <div className="profile-wrapper">
      <div className="home-icon">
        <HomeIcon
          color="warning"
          fontSize="large"
          onClick={() => navigate("/")}
        />
      </div>

      <section className="profile">
        <img src={AVATAR} alt="avatar" className="profile__avatar" />
        <h3>
          User ID: <span>{user.uid}</span>
        </h3>
        <h4>
          Logged Email: <span>{user.email}</span>
        </h4>

        <h5>Netflix Current Plan</h5>
        <article className="profile__plan">Premium</article>
        <button className="profile__logOut" onClick={handleLogOut}>
          LogOut!
        </button>
      </section>
    </div>
  );
}

export default Profile;
