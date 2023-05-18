import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import regularLogo from '../assets/images/logo.svg';
import proLogo from '../assets/images/logo-bonus.svg'


const Score = () => {

  const {mode,scorePro,scoreRegular}= useContext(AppContext);

  const {proMode} = mode;

  return (
    <section className='flex justify-between items-center border-2 p-4 rounded-md h-32 w-full sm:w-2/3' style={{borderColor:'var(--headerOutline)'}} >
        <img className='h-full' src={proMode?proLogo:regularLogo} alt={proMode?'Pro Logo':'Regular Logo'} />
        <div className='flex flex-col items-center justify-center h-full w-24 rounded-md' style={{backgroundColor:'var(--white)'}}>
            <div style={{color:'var(--scoreText)'}} >SCORE</div>
            <div className='flex font-bold text-5xl' style={{color:'var(--darkText)'}}>{proMode?scorePro.score:scoreRegular.score}</div>
        </div>

    </section>
  )
}

export { Score };