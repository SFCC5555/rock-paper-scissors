import React from 'react';
import { AppContext } from '../context/App/AppContext';
import { useContext } from 'react';
import '../styles/Results.css';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg';

const Results = () => {

  const {results} = useContext(AppContext)

  return (
    <>
      {
        results&&<section className='w-full sm:w-2/3 flex flex-col items-center justify-between'>
                    <div className='w-full flex items-center justify-between'>
                      <div className='flex flex-col items-center text-white gap-5 sm:flex-col-reverse'>
                        <div className={`figureImage handResult`}><div className='subContainer'><img className='figure' src={paper} alt="Paper" /></div></div>
                        <h3>YOU PICKED</h3>
                      </div>
                      <div className='flex flex-col items-center text-white gap-5 sm:flex-col-reverse'>
                        <div className={`figureImage handResult`}><div className='subContainer'><img className='figure' src={paper} alt="Paper" /></div></div>
                        <h3>THE HOUSE PICKED</h3>
                      </div>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                      <h1 className='text-white text-4xl' >YOU LOSE</h1>
                      <button className='w-full bg-white rounded-md py-2 letterSpacing2px' style={{color:'var(--darkText)'}} >PLAY AGAIN</button>
                    </div>
                 </section>
      }
    </>
  )
}

export {Results};