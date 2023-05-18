import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({children})=>{

    const [proMode,setProMode] = useState(false);
    
    const useScore = () =>{
        const [score,setScore] = useState(0);

        const increase = () => {
            setScore(prev=>prev+1)
        }
        
        return {
            score,
            increase
        }
    }
    
    const scoreRegular = useScore();
    const scorePro = useScore();

    return <AppContext.Provider value={{proMode,setProMode,scoreRegular,scorePro}}>
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};