// import React, { useState, useEffect } from 'react'
// import {Questions}  from '../data'
// import { useGlobalContext } from '../context'

// const Quiz=()=> {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [optionChosen, setOptionChosen] = useState('');
// 	const [color, setColor] = useState('');
// 	const [isClicked, setIsClicked] = useState(false);
// 	const { score, setScore, gameState, setGameState } = useGlobalContext();

// 	const nextQuestion=()=>{
// 		if(Questions[currentQuestion].answer == optionChosen){
// 			setScore(score +1)
// 		}
// 		setCurrentQuestion(currentQuestion+1)
// 	}

// 	const finishQuiz =()=>{
// 		if(Questions[currentQuestion].answer == optionChosen){
// 			setScore(score +1)
// 		}
// 		setGameState("endscreen")
// 	}

// 	const getSelected=(e)=>{
// 		 let classToApply = optionChosen == Questions[currentQuestion].answer ? 'correct' : 'incorrect';
// 		 setIsClicked(true);
// 		 	console.log(optionChosen)
// 	}

// useEffect(() => {
// 	getSelected();
// }, [optionChosen])

//         return (
//             <div className="quiz">
//                 <h1>{Questions[currentQuestion].promt}</h1>
//                 <div className="options">
//                 <button  onClick={()=> setOptionChosen('A') } >{Questions[currentQuestion].optionA} </button>
//                 <button onClick={()=> setOptionChosen('B')}>{Questions[currentQuestion].optionB}</button>
//                 <button onClick={()=> setOptionChosen('C')}>{Questions[currentQuestion].optionC}</button>
//                 <button  onClick={()=> setOptionChosen('D')}>{Questions[currentQuestion].optionD}</button>
//                 </div>
//                 {currentQuestion=== Questions.length -1 ? (
//                 	<button onClick={finishQuiz}>Finish Quiz</button> 
//                 	) :  
//                 	(<button onClick={nextQuestion}>Next Question</button>
//                 	)} 
//             </div>
//         )
// }

// export default Quiz