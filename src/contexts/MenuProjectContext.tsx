import { createContext, ReactNode, useState } from 'react';

interface MenuProjectContextData {
    isMenuComponentActive: boolean;
    setIsMenuComponentActive: (isMenuComponentActive: boolean) => void;
}

interface MenuProjectProviderProps {
    children: ReactNode;
}

export const MenuProjectContext = createContext({} as MenuProjectContextData);

export function MenuProjectProvider({ children }: MenuProjectProviderProps) {

    const [isMenuComponentActive, setIsMenuComponentActive] = useState(false);

    return (
        <MenuProjectContext.Provider
            value={{
                isMenuComponentActive,
                setIsMenuComponentActive
            }}
        >
            {children}
        </MenuProjectContext.Provider>
    );
}