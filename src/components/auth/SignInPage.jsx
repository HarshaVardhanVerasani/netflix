import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/slice";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function SignInPage({ setIsToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        dispatch(
          logIn({
            uid: `${user.uid}`,
            email: `${user.email}`,
          })
        );
      })
      .catch((e) => {
        console.log(e.message, "cdd");
        const str = e.message.substring(e.message.indexOf("/")+1, e.message.length-2)
        toast.error(`${str}`);
      });
    e.preventDefault();
  };

  return (
    <section className="signIn">
      <div>
        <h2>Sign In</h2>
        <form action="" className="signInForm">
          <TextField
            id="email"
            label="Email"
            variant="filled"
            type="email"
            className="signIn__email"
            color="warning"
            required
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <FormControl variant="filled" className="signUp__password">
            <InputLabel htmlFor="password" color="warning">
              Password
            </InputLabel>
            <FilledInput
              color="warning"
              id="password"
              value={password}
              required
              onInput={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                    color="warning"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <button
            className="signIn__btn"
            type="submit"
            onClick={(e) => handleSignIn(e)}
          >
            Sign In
          </button>
        </form>
        <span style={{ opacity: 0.5 }}>New to Netflix ? </span>
        <span
          className="signUp_link"
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setIsToggle(true)}
        >
          Sign Up
        </span>
      </div>
    </section>
  );
}

export default SignInPage;
