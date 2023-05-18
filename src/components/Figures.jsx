import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import triangle from '../assets/images/bg-triangle.svg';
import pentagon from '../assets/images/bg-pentagon.svg';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';

const Figures = () => {

  const {proMode} = useContext(AppContext);

  return (
    <section className='relative h-1/4 sm:h-1/3' >
        <img className='h-full' src={proMode?pentagon:triangle} alt={proMode?'Pentagon':'Triangle'} />
        <button className='figureButton hand'><div className='subContainer'><img className='figure' src={paper} alt="Paper" /></div></button>
        <button className='figureButton scissors'><div className='subContainer'><img className='figure' src={scissors} alt="Scissors" /></div></button>
        <button className='figureButton rock'><div className='subContainer'><img className='figure' src={rock} alt="Rock" /></div></button>
    </section>
  )
}

export {Figures};