import { useState } from "react";

// Custom hook for managing a high score list
const useHighScoreList = (storageHighScore) => {
    // Initializing the 'highScoreList' state with default values from localStorage or an empty list
    const [highScoreList, setHighScoreList] = useState(
        localStorage.getItem(storageHighScore)
            ? JSON.parse(localStorage.getItem(storageHighScore))
            : [{'nickname': '', 'score': ''}, {'nickname': '', 'score': ''}, {'nickname': '', 'score': ''}, {'nickname': '', 'score': ''}, {'nickname': '', 'score': ''}]
    );

    // Function to update the high score list with a new score
    const update = (s) => {
        // Creating a new score object with an empty nickname and the provided score
        const newScore = {'nickname': '', 'score': s, 'current': true};

        // Creating a new list based on the current high score list
        let newList = [...highScoreList];

        // Removing the 'current' property from all previous high scores
        for (let h of newList) {
            if (h.current) {
                delete h.current;
            }
        }

        // Adding the new score to the list
        newList = [...newList, newScore];

        // Sorting the list in descending order based on the score
        newList.sort((a, b) => b.score - a.score);

        // Keeping only the top 5 scores
        newList = newList.slice(0, 5);

        // Updating the state with the new high score list
        setHighScoreList(newList);

        // Storing the updated high score list in localStorage
        localStorage.setItem(storageHighScore, JSON.stringify(newList));
    }

    // Function to give a nickname to the current high score
    const giveNickname = (newNickname) => {
        // Creating a new list based on the current high score list
        let newList = [...highScoreList];

        // Setting the provided nickname for the current high score
        for (let h of newList) {
            if (h.current) {
                h.nickname = newNickname;
            }
        }

        // Updating the state with the new high score list
        setHighScoreList(newList);

        // Storing the updated high score list in localStorage
        localStorage.setItem(storageHighScore, JSON.stringify(newList));
    }

    // Returning an object with 'highScoreList', 'update', and 'giveNickname' functions
    return {
        highScoreList, // The current high score list
        update,        // Function to update the high score list
        giveNickname   // Function to give a nickname to the current high score
    }
}

// Exporting the 'useHighScoreList' hook to be used in other components
export { useHighScoreList };