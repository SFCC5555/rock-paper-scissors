import React from "react";
import { useState } from "react";

const useScore = () =>{
    const [score,setScore] = useState(0);

    const increase = () => {
        setScore(prev=>prev+1)
    }

    const reset = () => {
        setScore(0);
    }
    
    return {
        score,
        increase,
        reset
    }
}

export {useScore};