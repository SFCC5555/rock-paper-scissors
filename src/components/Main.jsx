import React, { useContext } from 'react'
import { AppContext } from '../context/App/AppContext';
import { Figures } from './Figures';
import { Results } from './Results';

const Main = () => {

  const {results} = useContext(AppContext);

  return (<>
            {results?<Results />:<Figures />}
         </>)
  
}

export {Main};