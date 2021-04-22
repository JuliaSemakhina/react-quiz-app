import React from 'react'
import { useGlobalContext } from '../context'
import {Questions}  from '../data'

const EndScreen=()=> {
	const { score, setScore, setGameState } = useGlobalContext();
	const restartQuiz =()=>{
		setScore(0);
		setGameState('menu');
	}
        return (
            <div className="endscreen">
                <h1>Quiz Finished</h1>           
                <h3> {score} / {Questions.length}</h3>
                <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
        )
}

export default EndScreen