import { useState, useEffect, createContext, ReactNode } from 'react';

// import { BackProjectModal } from '../components/BackProjectModal';
import pledgeOptions from '../../pledgeOptions.json';

interface PledgeObjectData {
    id: number;
    title: string;
    subtitle: string;
    productsLeft: string;
    description: string;
    optionValue: string;
}

interface BackProjectContextData {
    isBackProjectModelOpen: boolean;
    setIsBackProjectModelOpen: (isBackProjectModelOpen: boolean) => void;
    optionSelected: string;
    setOptionSelected: (optionSelected: string) => void;
    pledgeOptionsData: Array<PledgeObjectData>; /* Este hay que modificar para crear objetos mas especificos */
    setPledgeOptionsData: ([]) => void;
    isThanksModalOpen: boolean;
    setIsThanksModalOpen: (isThanksModalOpen: boolean) => void;
    moneyRaised: number;
    setMoneyRaised: (moneyRaised: number) => void;
    totalBackers: number;
    setTotalBackers: (totalBackers: number) => void;
}

interface BackProjectProviderProps {
    children: ReactNode;
}


export const BackProjectContext = createContext({} as BackProjectContextData);

export function BackProjectProvider({ children }: BackProjectProviderProps) {

    const [totalBackers, setTotalBackers] = useState(0);
    const [moneyRaised, setMoneyRaised] = useState(0);
    const [pledgeOptionsData, setPledgeOptionsData] = useState(pledgeOptions);
    const [isBackProjectModelOpen, setIsBackProjectModelOpen] = useState(false);
    const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
    const [optionSelected, setOptionSelected] = useState("");

    return (
        <BackProjectContext.Provider
            value={{
                isBackProjectModelOpen,
                setIsBackProjectModelOpen,
                optionSelected,
                setOptionSelected,
                pledgeOptionsData,
                setPledgeOptionsData,
                isThanksModalOpen,
                setIsThanksModalOpen,
                moneyRaised,
                setMoneyRaised,
                totalBackers,
                setTotalBackers
            }}
        >
            {children}

        </BackProjectContext.Provider>
    )
}