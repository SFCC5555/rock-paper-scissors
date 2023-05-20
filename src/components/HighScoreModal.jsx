import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App/AppContext'


const HighScoreModal = () => {

  const {highScoreModal,setHighScoreModal,mode} = useContext(AppContext);
  const {proMode} = mode;
  const [inputValue,setInputValue] = useState('');

  const highScoresList = [1,32,3,4,5];

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <>
    {
      highScoreModal && 
      <div className='absolute top-0 w-full h-full bg-black/50 flex flex-col gap-3 justify-center items-center z-10'>
        <div className='text-white text-3xl letterSpacing2px opacity-60'>GAME OVER</div>
        <section className='w-3/4 sm:w-1/2 md:w-1/3 rounded-md p-5 flex flex-col gap-3' style={{backgroundColor:'var(--secondBody)'}}>
            <div>
                <div className='text-xl' style={{color:'var(--headerOutline)'}} >{proMode?'PRO':'NORMAL'} MODE</div>
                <div className='text-white text-2xl text-center letterSpacing2px'>HIGHSCORES</div>
            </div>

            <div className=' flex flex-col text-gray-300 border-2 h-full rounded-md px-3 py-5 gap-5' style={{borderColor:'var(--headerOutline)'}}>
                {highScoresList.map(h=>
                <div className='flex justify-between gap-2'>

                    <div>1.°</div>
                    <div className='w-full h-5 border-b-2 border-dashed border-gray-300'></div>
                    <div>SEV</div>

                    </div>)}
                </div>



            <div className='flex items-end justify-between'>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor='nickname' style={{color:'var(--headerOutline)'}} >ENTER YOUR NICKNAME:</label>
                    <input value={inputValue} onChange={handleChange} id='nickname' type='text'className='w-3/4 border-2 rounded-md px-2 py-1 text-xs text-white hover:opacity-70 letterSpacing2px' style={{backgroundColor:'var(--secondBody)',borderColor:'var(--headerOutline)'}}></input>
                </div>
                <button onClick={()=>setHighScoreModal(false)} className='selectButton text-xs rounded-lg border-2 py-1 px-4 letterSpacing2px'>CONFIRM</button>
            </div>
        </section>      


      </div>
    }
    </>
  )
}

export {HighScoreModal}