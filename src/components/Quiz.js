import React, { useState, useEffect } from 'react'
import {Questions}  from '../data'
import { useGlobalContext } from '../context'

const Quiz=()=> {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const { score, setScore, gameState, setGameState } = useGlobalContext();

	const nextQuestion=()=>{
		setCurrentQuestion(currentQuestion+1)
	}

	const finishQuiz =()=>{
		setGameState("endscreen")
	}

	const correctAnswer=(isCorrect)=>{
		if(isCorrect){
			setScore(score +1)
		}
	}

        return (
            <div className="quiz">
                <h1>{Questions[currentQuestion].promt}</h1>
                <div className='options'>
                	{Questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button key={index++} onClick={() => correctAnswer(answerOption.isCorrect)}
							>{answerOption.optionText}</button>
						))}
                </div>
               
                {currentQuestion=== Questions.length -1 ? (
                	<button onClick={finishQuiz}>Finish Quiz</button> 
                	) :  
                	(<button onClick={nextQuestion}>Next Question</button>
                	)} 
            </div>
        )
}

export default Quiz