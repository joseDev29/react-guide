import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  // const dispatch = useDispatch();

  const sessionContext = useContext(AuthContext);

  const { login } = sessionContext;

  const onClickLogin = () => {
    // dispatch(
    //   login({
    //     session: {
    //       username: "JaneDow",
    //       role: "admin",
    //     },
    //   })
    // );

    login({
      username: "Jane Doe",
      role: "customer",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
};

export default Login;
