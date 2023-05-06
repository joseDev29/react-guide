import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [validateSession, setValidateSession] = useState(true);

  const login = (newSession) => {
    setSession(newSession);
    localStorage.setItem("session", JSON.stringify(newSession));
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem("session");
  };

  useEffect(() => {
    const savedSession = localStorage.getItem("session");
    if (savedSession && typeof JSON.parse(savedSession) === "object") {
      setSession(JSON.parse(savedSession));
    }
    setValidateSession(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        logout,
      }}
    >
      {validateSession ? (
        <div>
          <h1>Validando la session</h1>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
