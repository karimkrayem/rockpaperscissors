import React, { useState, useEffect } from 'react'
import './FinalGame.css'
import { Link } from 'react-router-dom'
import Modal from './Modal'



const FinalGame = ({ ChoixFinal, Score, ScoreFinal }) => {

    const [ordi, setOrdi] = useState("")
    const [count, setCount] = useState(3)
    const [result, setResult] = useState("")
    const [points, setPoints] = useState(0)
    const randomChoice = () => {
        const choix = ["rock", "paper", "scissors"];
        setOrdi(choix[Math.floor(Math.random() * 3)])
    }



    useEffect(() => {
        // winResult()
        randomChoice();

    }, [])


    const winResult = () => {
        if (ChoixFinal === "rock" && ordi === "paper") {
            setResult("YOU LOSE")
            ScoreFinal(Score - 1)
        } else if (ChoixFinal === "rock" && ordi === "scissors") {
            setResult("YOU WIN")
            ScoreFinal(Score + 1)

        } else if (ChoixFinal === "paper" && ordi === "scissors") {
            setResult("YOU LOSE")
            ScoreFinal(Score - 1)

        } else if (ChoixFinal === "paper" && ordi === "rock") {
            setResult("YOU WIN")
            ScoreFinal(Score + 1)

        } else if (ChoixFinal === "scissors" && ordi === "rock") {
            setResult("YOU LOSE")
            ScoreFinal(Score - 1)

        } else if (ChoixFinal === "scissors" && ordi === "paper") {
            setResult("YOU WIN")
            ScoreFinal(Score + 1)

        } else if (ChoixFinal === ordi) {
            setResult("DRAW")
        }
    }

    // useEffect(() => {
    //     if (count > 0) {
    //         setTimeout(() => {
    //             setCount(() => count - 1);
    //             if (count <= 1) {
    //                 // winResult()
    //                 randomChoice();

    //             }
    //         }, 1000)
    //     }
    // });

    useEffect(() => {

        const timer =
            count > 0
                ? setInterval(() => {
                    setCount(count - 1);

                }, 1000)
                : winResult();

        return () => {
            clearInterval(timer);
        };
    }, [count, ordi]);



    console.log(ordi)
    console.log(ChoixFinal)



    return (

        <div >

            <div className='d-none' >
                <div className='myChoice'>
                    <h3>YOU PICKED</h3>
                    <div className={ChoixFinal}></div>

                </div>
                <div className="play">

                    <div className='result'><h1 className='resultPoints'>{result}</h1></div>
                    <Link to="/">
                        <button className='replay'>PLAY AGAIN</button>
                    </Link>
                </div>
                <div className='computerChoice'>
                    <h3>THE HOUSE PICKED</h3>
                    <div className={ordi + " ordi"}>
                    </div>
                    <div className='count'>
                        {count}
                    </div>

                </div>
            </div>



        </div>



    )

}

export default FinalGame