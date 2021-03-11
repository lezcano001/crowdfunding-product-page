import { useState, useEffect, createContext, ReactNode } from 'react';

import { BackProjectModal } from '../components/BackProjectModal';


interface BackProjectContextData {
    isBackProjectModelOpen: boolean;
    setIsBackProjectModelOpen: (isBackProjectModelOpen: boolean) => void;
    optionSelected: string;
    setOptionSelected: (optionSelected: string) => void;
}

interface BackProjectProviderProps {
    children: ReactNode;
}


export const BackProjectContext = createContext({} as BackProjectContextData);

export function BackProjectProvider({ children }: BackProjectProviderProps) {

    const [isBackProjectModelOpen, setIsBackProjectModelOpen] = useState(false);
    const [optionSelected, setOptionSelected] = useState("");

    return (
        <BackProjectContext.Provider
            value={{
                isBackProjectModelOpen,
                setIsBackProjectModelOpen,
                optionSelected,
                setOptionSelected
            }}
        >
            {children}

        </BackProjectContext.Provider>
    )
}