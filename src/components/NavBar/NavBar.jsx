import { Link } from "react-router-dom";
import { routesPaths } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/authSlice";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  // const session = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  const sessionContext = useContext(AuthContext);
  const { session, logout } = sessionContext;

  const onClickLogout = () => {
    // dispatch(logout());
    logout();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        borderRight: "1px solid #000",
      }}
    >
      {session ? (
        <>
          <h3>{session.username}</h3>
          <h3>{session.role}</h3>
          <Link to={routesPaths.useState}>Use State</Link>
          <Link to={routesPaths.useEffect}>Use Effect</Link>
          <Link to={routesPaths.useRef}>Use Ref</Link>
          <Link to={routesPaths.useMemo}>Use Memo</Link>
          <Link to={routesPaths.useReducer}>Use State</Link>
          <Link to={routesPaths.useContext}>Use State</Link>
          <button onClick={onClickLogout}>Logout</button>
        </>
      ) : (
        <Link to={routesPaths.login}>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
