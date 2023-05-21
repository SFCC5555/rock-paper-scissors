import { useState } from "react";

const useHighScoreList = (storageHighScore) =>{

    const [highScoreList,setHighScoreList] = useState(localStorage.getItem(storageHighScore)?JSON.parse(localStorage.getItem(storageHighScore)):[{'nickname':'','score':''},{'nickname':'','score':''},{'nickname':'','score':''},{'nickname':'','score':''},{'nickname':'','score':''}]);

    const update = (s) => {

        const newScore = {'nickname':'','score':s,'current':true}

        let newList = [...highScoreList];

        for (let h of newList) {
            if (h.current) {
                delete h.current;
            }
        }
        
        newList = [...newList,newScore];

        newList.sort((a,b)=>b.score-a.score);


        newList=newList.slice(0,5);


        setHighScoreList(newList);
        localStorage.setItem(storageHighScore,JSON.stringify(newList));
    }

    const giveNickname = (newNickname) => {
        let newList = [...highScoreList];

        for (let h of newList) {
            if (h.current) {
                h.nickname=newNickname
            }
        }

        setHighScoreList(newList);
        localStorage.setItem(storageHighScore,JSON.stringify(newList));
    }
    
    return {
        highScoreList,
        update,
        giveNickname
    }
}

export {useHighScoreList};