import { useContext } from 'react';
import { AppContext } from '../context/App/AppContext';

// Rules component for displaying game rules
const Rules = () => {
  // Accessing the setRulesModal function from the app's context using the useContext hook
  const { setRulesModal } = useContext(AppContext);

  return (
    // Button to open the rules modal when clicked
    <button
      onClick={() => setRulesModal(true)}
      className='selectButton rounded-lg border-2 py-1 px-8 letterSpacing2px'
    >
      RULES
    </button>
  );
}

// Exporting the 'Rules' component
export { Rules };




