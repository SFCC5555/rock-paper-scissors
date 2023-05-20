import './App.css';
import { AppContextProvider } from './context/App/AppContext';
import { Score } from './components/Score';
import { Rules } from './components/Rules';
import { Mode } from './components/Mode';
import { RulesModal } from './components/RulesModal';
import { Main } from './components/Main';


function App() {

  return (
    <AppContextProvider>
      <Score />
      <Main />
      <section className='w-full flex justify-between items-center'>
        <Mode />
        <Rules />
      </section>
      <RulesModal />
    </AppContextProvider>
  )
}

export default App
