import './App.css';
import { AppContextProvider } from './context/App/AppContext';
import { Score } from './components/Score';
import { Figures } from './components/Figures';
import { Rules } from './components/Rules';
import { Mode } from './components/Mode';
import { RulesModal } from './components/RulesModal';
import { Results } from './components/Results';


function App() {

  return (
    <AppContextProvider>
      <Score />
      <Figures />
      <Results />
      <section className='w-full flex justify-between items-center'>
        <Mode />
        <Rules />
      </section>
      <RulesModal />
    </AppContextProvider>
  )
}

export default App
