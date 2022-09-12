
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import './Game.css'

const Game = ({ setMonChoix, closeMode }) => {

    const setChoix = (e) => {
        setMonChoix(e.target.dataset.id)
        console.log(e.target.dataset.id)
    }



    const pickClass = (e) => {
        const chosenClass = e.target.className
        console.log(e.target.className)

    }


    return (
        <div>

            <div className='hand'>
                <div className='top' >
                    <Link to="/Jeux">
                        <div data-id="scissors" onClick={setChoix} className='scissors scissorsPos'></div>
                    </Link>
                    <Link to="/Jeux">
                        <div data-id="rock" onClick={setChoix} className='rock rockPos'></div>
                    </Link>
                    <Link to="/Jeux">
                        <div data-id="paper" onClick={setChoix} className="paper paperPos">

                        </div>
                    </Link>
                </div>

                <div>
                </div>
            </div>
            <div className='rules'>

                <button onClick={closeMode} className='rules-btn'>RULES</button>
            </div>

        </div>


    )

}

export default Game 