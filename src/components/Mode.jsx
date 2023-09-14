import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';

// Mode component for toggling between PRO and NORMAL modes
const Mode = () => {
  // Accessing context values using the useContext hook
  const { mode, setResults } = useContext(AppContext);
  const { proMode, changeMode } = mode;

  return (
    <button
      onClick={() => {
        // Call the 'changeMode' function and set 'results' to false when the button is clicked
        changeMode();
        setResults(false);
      }}
      className='selectButton rounded-lg border-2 py-1 px-8 letterSpacing2px'
    >
      {/* Display either 'NORMAL MODE' or 'PRO MODE' based on 'proMode' */}
      {proMode ? 'NORMAL MODE' : 'PRO MODE'}
    </button>
  );
}

// Exporting the 'Mode' component
export { Mode };