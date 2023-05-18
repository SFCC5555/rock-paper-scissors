import React from 'react'
import { AppContext } from '../context/App/AppContext';
import { useContext } from 'react';

const Rules = () => {

  const {setRulesModal} = useContext(AppContext);

  return (
    <button onClick={()=>setRulesModal(true)} className='selectButton  rounded-lg border-2 py-1 px-8 letterSpacing2px'>RULES</button>
  )
}

export {Rules};