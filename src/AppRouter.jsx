import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import UseContextPage from "./views/UseContextPage/UseContextPage";
import UseEffectPage from "./views/UseEffectPage/UseEffectPage";
import UseMemoPage from "./views/UseMemoPage/UseMemoPage";
import UseReducerPage from "./views/UseReducerPage/UseReducerPage";
import UseRefPage from "./views/UseRefPage/UseRefPage";
import UseStatePage from "./views/UseStatePage/UseStatePage";
import { useSelector } from "react-redux";
import { routesPaths } from "./routes";
import Login from "./views/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const AppRouter = () => {
  // const session = useSelector((state) => state.auth);

  const sessionContext = useContext(AuthContext);
  const { session } = sessionContext;

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <NavBar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {session ? (
              <>
                <Route element={<UseStatePage />} path={routesPaths.useState} />
                <Route
                  element={<UseEffectPage />}
                  path={routesPaths.useEffect}
                />
                <Route element={<UseRefPage />} path={routesPaths.useRef} />
                <Route element={<UseMemoPage />} path={routesPaths.useMemo} />
                <Route
                  element={<UseReducerPage />}
                  path={routesPaths.useReducer}
                />
                <Route
                  element={<UseContextPage />}
                  path={routesPaths.useContext}
                />
                <Route element={<Navigate to="/use-state" />} path="*" />
              </>
            ) : (
              <>
                <Route element={<Login />} path={routesPaths.login} />
                <Route element={<Navigate to={routesPaths.login} />} path="*" />
              </>
            )}
            {/* <Route
          element={
            <div>
              <h1>Not found</h1>
            </div>
          }
          path="*"
        /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
