//done
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const defaultUser = null;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    const login = (role = 'user') => {
        setUser({ role }); 
    };

    const logout = () => {
        setUser(null);
    };

    const value = { user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
