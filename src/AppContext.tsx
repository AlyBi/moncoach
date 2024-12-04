import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserType = 'company' | 'individual' | null;

interface AppContextType {
    userType: UserType;
    setUserType: (type: UserType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userType, setUserType] = useState<UserType>(localStorage.getItem('userType') as UserType || null);

    return (
        <AppContext.Provider value={{ userType, setUserType }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

