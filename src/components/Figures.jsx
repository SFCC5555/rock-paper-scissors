import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import triangle from '../assets/images/bg-triangle.svg';
import pentagon from '../assets/images/bg-pentagon.svg';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg';
import {data} from '../data'

const Figures = () => {

  const {mode,setResults,setYourFigure,setHouseFigure,setDuelResult,scorePro,scoreRegular} = useContext(AppContext);

  const {proMode} = mode;

  function play(e) {

    const n = proMode?5:3;
    
    const figurePickedHouse = data[Math.floor(Math.random()*n)]

    const figurePicked = data.find(f=>f.name===e.target.id)


    if (figurePicked.beats.findIndex(b=>b===figurePickedHouse.name)!==-1) {
      setDuelResult('WIN');
      setTimeout(proMode?scorePro.increase:scoreRegular.increase,2000);

    } else if (figurePickedHouse.beats.findIndex(b=>b===figurePicked.name)!==-1) {
      setDuelResult('LOSE');
      setTimeout(proMode?scorePro.reset:scoreRegular.reset,2000);
    } else {
      setDuelResult('DRAW');
    }

    setHouseFigure(figurePickedHouse)
  
    setYourFigure(figurePicked)

    setResults(true);

  }

  return (<section className='relative h-1/4 sm:h-1/3' >
            <img className='h-full' src={proMode?pentagon:triangle} alt={proMode?'Pentagon':'Triangle'} />
            <button id='paper' onClick={play} className={`figureButton ${proMode?'paperPro':'paper'}`}><div id='paper' className='subContainer'><img id='paper' className='figure' src={paper} alt="Paper" /></div></button>
            <button id='scissors' onClick={play} className={`figureButton ${proMode?'scissorsPro':'scissors'}`}><div id='scissors' className='subContainer'><img id='scissors' className='figure' src={scissors} alt="Scissors" /></div></button>
            <button id='rock' onClick={play} className={`figureButton ${proMode?'rockPro':'rock'}`}><div id='rock' className='subContainer'><img id='rock' className='figure' src={rock} alt="Rock" /></div></button>
            {proMode&&<button id='spock' onClick={play} className={`figureButton spockPro`}><div id='spock' className='subContainer'><img id='spock' className='figure' src={spock} alt="Spock" /></div></button>}
            {proMode&&<button id='lizard' onClick={play} className={`figureButton lizardPro`}><div id='lizard' className='subContainer'><img id='lizard' className='figure' src={lizard} alt="Lizard" /></div></button>}
        </section>
  )
}

export {Figures};