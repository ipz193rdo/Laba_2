import React, { useState } from 'react'

const Game = () => {
    const [count, setCount] = useState(10);
    const [number, setNumber] = useState(0);
    
    const start = ()=>{
        setNumber(Math.floor(Math.random()*1000))
        document.getElementById('new_game').disabled = true;
        document.getElementById('check').disabled = false;    
        res.innerHTML = null;
      
    }


    let res = document.getElementById('res');
    const check = ()=>{
    let num = document.getElementById('promt').value
    let out = document.getElementById('out');
    

    setCount(count-1)

    if(num == number) {
        res.innerHTML = 'Game Over!';
    }
    else if(num > number){
        out.innerHTML = `${num} > N`;
    }
    else{
      out.innerHTML = `${num} < N`;
    }

    if(count === 0){
        res.innerHTML = 'Game Over!';
        document.getElementById('check').disabled = true;
        document.getElementById('new_game').disabled = false;
        setCount(10)
    }

    }


    



  return (
    <div className='game__container '>
        <button id='new_game' onClick={start}>New Game</button>
        <input id='promt' className='game-input'/>
        <button id='check' onClick={check} >Check</button>
        <h3>Information</h3>
        <p id='out'></p>
        <p>Attempts: {count}</p>
        <p >Result: <span id='res'></span></p>
    </div>
  )
}

export default Game