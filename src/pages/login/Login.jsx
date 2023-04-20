import { useContext, useState } from "react";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);
        // ...
        navigate("/");
      })
      .catch((e) => {
        setError(true);
      });
  };
  return (
    <div className="border">
      <div className="input">
        <div>
          <form onSubmit={handleLogin} className="box">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              type="email"
              placeholder="email"
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              type="password"
              placeholder="password"
            />
            <button className="submit" type="submit">
              Login
            </button>
            {error && <p className="error">An error occured</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
