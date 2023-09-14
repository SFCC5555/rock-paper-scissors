import { useState } from "react";

// Custom hook for managing a score state
const useScore = () => {
    // Initializing the 'score' state with a default value of 0
    const [score, setScore] = useState(0);

    // Function to increase the score by 1
    const increase = () => {
        // Updating the 'score' state using the previous state value
        setScore(prev => prev + 1);
    }

    // Function to reset the score to 0
    const reset = () => {
        // Setting the 'score' state to 0
        setScore(0);
    }

    // Returning an object with 'score', 'increase', and 'reset' functions
    return {
        score,    // The current score value
        increase, // Function to increase the score
        reset     // Function to reset the score to 0
    }
}

// Exporting the 'useScore' hook to be used in other components
export { useScore };