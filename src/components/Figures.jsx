import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import triangle from '../assets/images/bg-triangle.svg';
import pentagon from '../assets/images/bg-pentagon.svg';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg'

const Figures = () => {

  const {proMode} = useContext(AppContext);

  return (
    <section className='relative h-1/4 sm:h-1/3' >
        <img className='h-full' src={proMode?pentagon:triangle} alt={proMode?'Pentagon':'Triangle'} />
        <button className={`figureButton ${proMode?'handPro':'hand'}`}><div className='subContainer'><img className='figure' src={paper} alt="Paper" /></div></button>
        <button className={`figureButton ${proMode?'scissorsPro':'scissors'}`}><div className='subContainer'><img className='figure' src={scissors} alt="Scissors" /></div></button>
        <button className={`figureButton ${proMode?'rockPro':'rock'}`}><div className='subContainer'><img className='figure' src={rock} alt="Rock" /></div></button>
        {proMode&&<button className={`figureButton spockPro`}><div className='subContainer'><img className='figure' src={spock} alt="Spock" /></div></button>}
        {proMode&&<button className={`figureButton lizardPro`}><div className='subContainer'><img className='figure' src={lizard} alt="Lizard" /></div></button>}
    </section>
  )
}

export {Figures};