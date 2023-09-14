import { useState } from "react";

// Custom hook for managing a mode (proMode) state
const useMode = () => {
    // Initializing the 'proMode' state with a default value from localStorage or false
    const [proMode, setProMode] = useState(
        localStorage.getItem('storageMode')
            ? JSON.parse(localStorage.getItem('storageMode'))
            : false
    );

    // Function to toggle the mode between true and false and update localStorage
    const changeMode = () => {
        // Toggling the 'proMode' state and storing it in localStorage
        setProMode(prev => {
            const newMode = !prev;
            localStorage.setItem('storageMode', JSON.stringify(newMode));
            return newMode;
        });
    }

    // Returning an object with 'proMode' and 'changeMode' functions
    return {
        proMode,    // The current mode value (true or false)
        changeMode  // Function to toggle the mode and update localStorage
    }
}

// Exporting the 'useMode' hook to be used in other components
export { useMode };