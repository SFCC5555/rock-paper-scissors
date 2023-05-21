import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App/AppContext'


const HighScoreModal = () => {

  const {highScoreModal,setHighScoreModal,mode,highScoreListRegular,highScoreListPro,scoreRegular,scorePro,activeInput} = useContext(AppContext);
  const {proMode} = mode;
  const [inputValue,setInputValue] = useState('');
  const [error,setError] = useState(false);

  const highScoreList = proMode?highScoreListPro.highScoreList:highScoreListRegular.highScoreList;

  function handleChange(e) {

    if (e.target.value.length<=3 && /^[^\d]*$/i.test(e.target.value)) {
      setInputValue(e.target.value.toUpperCase());
      setError(false);
    }

  }

  function handleClick() {

    if (activeInput) {

      if (inputValue) {

        setHighScoreModal(false);
        proMode?scorePro.reset():scoreRegular.reset();
        proMode?highScoreListPro.giveNickname(inputValue):highScoreListRegular.giveNickname(inputValue);
  
      } else {
        setError(true);
      }

    } else {

      setHighScoreModal(false);
      proMode?scorePro.reset():scoreRegular.reset();

    }

  }

  return (
    <>
    {
      highScoreModal && 
      <div className='absolute top-0 w-full h-full bg-black/50 flex flex-col gap-3 justify-center items-center z-10'>
        <div className='text-white text-3xl letterSpacing2px opacity-60'>GAME OVER</div>
        <section className='w-3/4 sm:w-1/2 md:w-1/3 rounded-md px-5 py-7 flex flex-col gap-3' style={{backgroundColor:'var(--secondBody)'}}>
            <div>
                <div className='text-xl' style={{color:'var(--headerOutline)'}} >{proMode?'PRO':'NORMAL'} MODE</div>
                <div className='text-white text-2xl text-center letterSpacing2px'>HIGHSCORES</div>
            </div>

            <div className=' flex flex-col border-2 h-full rounded-md px-3 py-5 gap-5' style={{borderColor:'var(--headerOutline)'}}>
                {highScoreList.map((h,i)=>
                <div key={i+1} id={i+1} className={`${h.current?'text-white':'text-gray-500'} flex justify-between items-end gap-2`}>

                    <div>{i+1}.°</div><div className='text-sm' >{h.current?inputValue:h.nickname}</div>
                    <div className={`w-full h-5 border-b-2 border-dashed self-start ${h.current?'border-white':'border-gray-500'}`}></div>
                    <div>{h.score}</div>

                    </div>)}
                </div>



            <div className={`flex items-end ${activeInput?'justify-between':'justify-end'}`}>
                {activeInput&&<div className='flex flex-col w-full gap-1 relative'>
                    <label htmlFor='nickname' style={{color:'var(--headerOutline)'}} >ENTER YOUR NICKNAME:</label>
                    <input value={inputValue} onChange={handleChange} id='nickname' type='text'className='w-3/4 border-2 rounded-md px-2 py-1 text-xs text-white hover:opacity-70 letterSpacing2px' style={{backgroundColor:'var(--secondBody)',borderColor:error?'var(--mainRed)':'var(--headerOutline)'}}></input>
                    {error&&<div className='error absolute top-12 translate-y-1' style={{color:'var(--mainRed)'}} >CAN´T BE BLANK</div>}
                </div>}
                <button onClick={handleClick} className='selectButton text-xs rounded-lg border-2 py-1 px-4 letterSpacing2px'>{activeInput?'CONFIRM':'CLOSE'}</button>
            </div>
        </section>      


      </div>
    }
    </>
  )
}

export {HighScoreModal}