import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AVATAR from "../../assets/Netflix-avatar.png";
import { logOut } from "../redux/slice";
import "./profile.css";

function Profile() {
  const user = useSelector((store) => store.netflix.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <button
          className="profile__logOut"
          onClick={() => {
            dispatch(logOut(null));
            navigate("/");
          }}
        >
          LogOut!
        </button>
      </section>
    </div>
  );
}

export default Profile;
