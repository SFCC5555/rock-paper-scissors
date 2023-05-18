import './App.css';
import { AppContextProvider } from './context/App/AppContext';
import { Score } from './components/Score';
import { Figures } from './components/Figures';
import { Rules } from './components/Rules';
import { Mode } from './components/Mode';


function App() {

  return (
    <AppContextProvider>
      <Score />
      <Figures />
      <section className='w-full flex justify-between items-center'>
        <Mode />
        <Rules />
      </section>

    </AppContextProvider>
  )
}

export default App
