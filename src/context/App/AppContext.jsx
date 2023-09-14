// Importing necessary modules and custom hooks
import { createContext, useState } from "react";
import { useMode } from "../../Hooks/useMode";
import { useScore } from "../../Hooks/useScore";
import { useHighScoreList } from "../../Hooks/useHighScoreList";

// Creating a context named 'AppContext'
export const AppContext = createContext({});

// AppContextProvider component for providing context values to children
const AppContextProvider = ({ children }) => {
    // Initializing custom hooks and state variables
    const mode = useMode();
    
    const scoreRegular = useScore();
    const scorePro = useScore();

    const [rulesModal, setRulesModal] = useState(false);

    const [results, setResults] = useState(false);

    const [yourFigure, setYourFigure] = useState({});
    
    const [houseFigure, setHouseFigure] = useState({});

    const [duelResult, setDuelResult] = useState('');

    const [highScoreModal, setHighScoreModal] = useState(false);

    const highScoreListRegular = useHighScoreList('storageListRegular');
    const highScoreListPro = useHighScoreList('storageListPro');

    const [activeInput, setActiveInput] = useState(false);

    // Providing context values to the children components
    return (
        <AppContext.Provider value={{
            mode,
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
    );
}

// Exporting the 'AppContextProvider' component
export { AppContextProvider };