import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAuth } from "../Redux/actions/authActions";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);

  const handleAuth = () => dispatch(toggleAuth());

  return (
    <div>
        <button className="btn btn-info" onClick={handleAuth}>
         {isAuth.isLoggedIn ? "logout" : "login"}
        </button>
    </div>
  );
};

export default Auth;
