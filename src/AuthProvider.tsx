import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider = ({ children }: { children: any}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const access = JSON.parse(localStorage.getItem('access') || '{}');
      if (access && Object.keys(access).length > 0) {
        setIsAuthenticated(true);
      }
    }, []);
  
    const login = () => {
      // Perform login logic here
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      // Perform logout logic here
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;