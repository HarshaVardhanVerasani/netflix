import React, { useState } from "react";
import LOGO from "../../assets/logo.png";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import "./welcomepage.css";

function WelcomePage() {
  const [toggle, setIsToggle] = useState(false);

  return (
    <section className="welcomePage">
      <img src={LOGO} alt="logo" className="logo" />
      {toggle === false && <SignInPage setIsToggle={setIsToggle} />}
      {toggle && <SignUpPage setIsToggle={setIsToggle} />}
    </section>
  );
}

export default WelcomePage;
