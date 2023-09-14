import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';
import { Figures } from './Figures';
import { Results } from './Results';

// Main component responsible for rendering game components based on results
const Main = () => {
  // Accessing context values using the useContext hook
  const { results } = useContext(AppContext);

  return (
    <>
      {/* Conditional rendering based on the 'results' state */}
      {results ? <Results /> : <Figures />}
    </>
  );
}

// Exporting the 'Main' component
export { Main };