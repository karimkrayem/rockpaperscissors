import './Score.css'

const Score = ({ setMyScore }) => {



    return (
        <div className='score'>
            <div className='score-inner title'>
                <h2>Rock</h2>
                <h2>Paper</h2>
                <h2>Scissors</h2>
            </div>
            <div className='score-inner score-result'>
                <span>SCORE </span>
                <h2>{setMyScore}</h2></div>
        </div>
    )

}

export default Score 