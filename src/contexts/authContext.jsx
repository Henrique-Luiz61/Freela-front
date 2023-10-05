import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(lsUser !== null ? lsUser.token : "");
  const [userId, setUserId] = useState(lsUser !== null ? lsUser.userId : "");
  const navigate = useNavigate();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!token) {
      alert("Log in to the website!");
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []);
  /* eslint-disable react-hooks/exhaustive-deps */

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
