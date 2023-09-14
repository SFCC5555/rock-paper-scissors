// Importing necessary modules and dependencies
import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import triangle from '../assets/images/bg-triangle.svg';
import pentagon from '../assets/images/bg-pentagon.svg';
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg';
import { data } from '../data'

// Figures component responsible for rendering game figures
const Figures = () => {
    // Accessing context values using the useContext hook
    const {
        mode,
        setResults,
        setYourFigure,
        setHouseFigure,
        setDuelResult,
        scorePro,
        scoreRegular,
        setHighScoreModal,
        highScoreListRegular,
        highScoreListPro,
        setActiveInput
    } = useContext(AppContext);

    // Extracting the 'proMode' value from the 'mode' context
    const { proMode } = mode;

    // Function to handle figure selection and determine the game result
    function play(e) {
        const n = proMode ? 5 : 3;

        // Selecting a random figure for the house
        const figurePickedHouse = data[Math.floor(Math.random() * n)];

        // Finding the selected figure
        const figurePicked = data.find(f => f.name === e.target.id);

        if (figurePicked.beats.findIndex(b => b === figurePickedHouse.name) !== -1) {
            setDuelResult('WIN');
            setTimeout(proMode ? scorePro.increase : scoreRegular.increase, 2000);
        } else if (figurePickedHouse.beats.findIndex(b => b === figurePicked.name) !== -1) {
            setDuelResult('LOSE');

            if (proMode) {
                // Update the high score list and show the modal
                scorePro.score && setTimeout(() => highScoreListPro.update(scorePro.score), 2100);
                scorePro.score && setTimeout(() => setHighScoreModal(true), 2000);
                scorePro.score > highScoreListPro.highScoreList[4].score ? setActiveInput(true) : setActiveInput(false);
            } else {
                // Update the high score list and show the modal
                scoreRegular.score && setTimeout(() => highScoreListRegular.update(scoreRegular.score), 2100);
                scoreRegular.score && setTimeout(() => setHighScoreModal(true), 2000);
                scoreRegular.score > highScoreListRegular.highScoreList[4].score ? setActiveInput(true) : setActiveInput(false);
            }
        } else {
            setDuelResult('DRAW');
        }

        // Update selected figures and results
        setHouseFigure(figurePickedHouse);
        setYourFigure(figurePicked);
        setResults(true);
    }

    return (
        <section className='relative h-1/4 sm:h-1/3'>
            {/* Render the appropriate background based on the game mode */}
            <img className='h-full' src={proMode ? pentagon : triangle} alt={proMode ? 'Pentagon' : 'Triangle'} />
            
            {/* Render clickable figure buttons */}
            <button id='paper' onClick={play} className={`figureButton ${proMode ? 'paperPro' : 'paper'}`}>
                <div id='paper' className='subContainer'>
                    <img id='paper' className='figure' src={paper} alt="Paper" />
                </div>
            </button>
            <button id='scissors' onClick={play} className={`figureButton ${proMode ? 'scissorsPro' : 'scissors'}`}>
                <div id='scissors' className='subContainer'>
                    <img id='scissors' className='figure' src={scissors} alt="Scissors" />
                </div>
            </button>
            <button id='rock' onClick={play} className={`figureButton ${proMode ? 'rockPro' : 'rock'}`}>
                <div id='rock' className='subContainer'>
                    <img id='rock' className='figure' src={rock} alt="Rock" />
                </div>
            </button>
            
            {/* Render additional figures for 'proMode' */}
            {proMode && (
                <>
                    <button id='spock' onClick={play} className={`figureButton spockPro`}>
                        <div id='spock' className='subContainer'>
                            <img id='spock' className='figure' src={spock} alt="Spock" />
                        </div>
                    </button>
                    <button id='lizard' onClick={play} className={`figureButton lizardPro`}>
                        <div id='lizard' className='subContainer'>
                            <img id='lizard' className='figure' src={lizard} alt="Lizard" />
                        </div>
                    </button>
                </>
            )}
        </section>
    );
}

// Exporting the 'Figures' component
export { Figures };