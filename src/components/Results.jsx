import React, { useEffect, useState } from 'react';
import { AppContext } from '../context/App/AppContext';
import { useContext } from 'react';
import '../styles/Results.css';

const Results = () => {

  const {setResults,yourFigure,houseFigure,duelResult} = useContext(AppContext);


  return (<section className='w-full sm:w-2/3 flex flex-col items-center justify-between gap-10 md:relative'>
            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-col items-center text-white gap-5 sm:flex-col-reverse md:gap-8'>
                <div className={duelResult==='WIN'?'winner':'absolute'} ></div>
                <div className={`figureImage ${yourFigure.name}Result`}><div className='subContainer'><img className='figure' src={yourFigure.image} alt={yourFigure.name} /></div></div>
                <h3>YOU PICKED</h3>
              </div>
              <div className='flex flex-col items-center text-white gap-5 sm:flex-col-reverse md:gap-8'>
                <div className={duelResult==='LOSE'?'winner':'absolute'}  ></div>
                <div className='figureContainer flex items-center justify-center' ><div className={`figureImage ${houseFigure.name}Result figureResult`}><div className='subContainer'><img className='figure' src={houseFigure.image} alt={houseFigure.name} /></div></div></div>
                <h3>THE HOUSE PICKED</h3>
              </div>
            </div>
            <div className='resultSection flex flex-col items-center gap-2 md:absolute md:top-1/2 md:-translate-y-1/4'>
              <h1 className='text-white text-6xl md:text-4xl' >{duelResult!=='DRAW'&&'YOU'} {duelResult}</h1>
              <button onClick={()=>setResults(false)} className='w-full bg-white rounded-md py-2 px-5 letterSpacing2px shadowClass' style={{color:'var(--darkText)'}} >PLAY AGAIN</button>
            </div>
          </section>
  )
}

export {Results};