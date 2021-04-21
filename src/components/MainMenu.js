import React from 'react'
import { useGlobalContext } from '../context'

const MainMenu=()=> {
	const {gameState, setGameState} = useGlobalContext();
        return (
            <div className="menu">
               <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
            </div>
        )
}

export default MainMenu