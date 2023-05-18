import React from "react";
import { useState } from "react";

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

export {useScore};