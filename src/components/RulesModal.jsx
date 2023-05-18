import React from 'react'
import { AppContext } from '../context/App/AppContext';
import { useContext } from 'react';
import regularRulesModal from '../assets/images/image-rules.svg';
import proRulesModal from '../assets/images/image-rules-bonus.svg';
import closeIcon from '../assets/images/icon-close.svg';

const RulesModal = () => {

    const {rulesModal,setRulesModal,mode} = useContext(AppContext);

    const {proMode} = mode;


  return (  
      <>
      {
        rulesModal && 
        <div className='absolute top-0 w-full h-full bg-black/50 flex justify-center items-center'>
                        
          <div className='bg-white h-full w-full sm:w-1/3 sm:h-auto px-4 pt-8 pb-6 opacity-100 flex flex-col items-center justify-between sm:rounded-md sm:-translate-y-10'>
            <div className='sm:flex sm:items-center sm:justify-between sm:w-full'>
              <h1 className='font-bold text-3xl' style={{color:'var(--darkText)'}} >{proMode?'PRO RULES':'NORMAL RULES'}</h1>
              <span onClick={()=>setRulesModal(false)} className='hidden sm:inline-block w-4 h-4 bg-cover bg-center cursor-pointer hover:opacity-50' style={{backgroundImage:`url(${closeIcon})`}}/>
            </div>

            <img className='sm:w-full sm:m-5' src={proMode?proRulesModal:regularRulesModal} alt={proMode?'Pro Rules':'Normal Rules'} />
            <span onClick={()=>setRulesModal(false)} className='sm:hidden inline-block w-5 h-5 bg-cover bg-center cursor-pointer' style={{backgroundImage:`url(${closeIcon})`}}/>
          </div>

        </div>
      }
      </>

  )
}

export {RulesModal};