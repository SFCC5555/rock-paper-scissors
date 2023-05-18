import { createContext, useState } from "react";
import { useMode } from "../../Hooks/useMode";
import { useScore } from "../../Hooks/useScore";

export const AppContext = createContext({});

const AppContextProvider = ({children})=>{

    const mode = useMode();
    
    const scoreRegular = useScore();
    const scorePro = useScore();

    return <AppContext.Provider value={{mode,scoreRegular,scorePro}}>
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};