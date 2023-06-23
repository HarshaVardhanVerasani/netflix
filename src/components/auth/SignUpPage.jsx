import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./firebase";
function SignUpPage({ setIsToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef(null);

  const handleSignUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log("new account is created");
        ref.current.click();
      })
      .catch((e) => {
        const str = e.message.substring(
          e.message.indexOf("/") + 1,
          e.message.length - 2
        );
        toast.error(`${str}`);
      });
    e.preventDefault();
  };

  return (
    <section className="signUp">
      <div>
        <h2>Sign Up</h2>
        <form action="" className="signUpForm">
          <TextField
            id="name"
            label="name"
            variant="filled"
            type="text"
            className="signUp__name"
            color="warning"
            required
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            type="email"
            className="signUp__email"
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

          <button className="signUp__btn" type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <span style={{ opacity: 0.5 }}>Already have an account ? </span>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setIsToggle(false)}
          className="signIn_link"
          ref={ref}
        >
          Sign In
        </span>
      </div>
    </section>
  );
}

export default SignUpPage;
