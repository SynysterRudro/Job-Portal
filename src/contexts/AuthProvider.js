import React, { createContext } from 'react';
import { } from ''

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authInfo = { name: 'rudro' }
    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;