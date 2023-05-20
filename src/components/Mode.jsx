import React from 'react'
import { AppContext } from '../context/App/AppContext';
import { useContext } from 'react';

const Mode = () => {

  const {mode,setResults} = useContext(AppContext);

  const {proMode,changeMode} = mode;


  return (
    <button onClick={()=>{changeMode();setResults(false)}} className='selectButton rounded-lg border-2 py-1 px-8 letterSpacing2px'>{proMode?'NORMAL MODE':'PRO MODE'}</button>
  )
}

export {Mode};