import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(lsUser !== null ? lsUser.token : "");
  const [name, setName] = useState(lsUser !== null ? lsUser.userName : "");
  const navigate = useNavigate();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []);
  /* eslint-disable react-hooks/exhaustive-deps */

  return (
    <AuthContext.Provider value={{ token, setToken, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
