import { useState } from "react";


const useMode = () => {

    const [proMode,setProMode] = useState(localStorage.getItem('storageMode')?JSON.parse(localStorage.getItem('storageMode')):false);

    const changeMode = () => {

        setProMode(prev=>!prev);
        localStorage.setItem('storageMode',JSON.stringify(!proMode));
    }

    return {
        proMode,
        changeMode
    }
}

export {useMode};