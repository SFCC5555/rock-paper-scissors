import { createContext, useState } from "react";
import { useMode } from "../../Hooks/useMode";
import { useScore } from "../../Hooks/useScore";
import { useHighScoreList } from "../../Hooks/useHighScoreList";

export const AppContext = createContext({});

const AppContextProvider = ({children})=>{

    const mode = useMode();
    
    const scoreRegular = useScore();
    const scorePro = useScore();

    const [rulesModal,setRulesModal] = useState(false);

    const [results,setResults] = useState(false);

    const [yourFigure,setYourFigure] = useState({});
    
    const [houseFigure,setHouseFigure] = useState({});

    const [duelResult,setDuelResult] = useState('');

    const [highScoreModal,setHighScoreModal] = useState(false);

    const highScoreListRegular = useHighScoreList('storageListRegular');
    const highScoreListPro = useHighScoreList('storageListPro');

    const [activeInput,setActiveInput] = useState(false);

    return <AppContext.Provider value={{mode,
                                        scoreRegular,
                                        scorePro,
                                        rulesModal,
                                        setRulesModal,
                                        results,
                                        setResults,
                                        yourFigure,
                                        setYourFigure,
                                        houseFigure,
                                        setHouseFigure,
                                        duelResult,
                                        setDuelResult,
                                        highScoreModal,
                                        setHighScoreModal,
                                        highScoreListRegular,
                                        highScoreListPro,
                                        activeInput,
                                        setActiveInput
                                        }}>
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};