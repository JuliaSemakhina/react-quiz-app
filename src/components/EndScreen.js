import React from 'react'
import { useGlobalContext } from '../context'

const EndScreen=()=> {
	const { score, setScore, gameState, setGameState } = useGlobalContext();
        return (
            <div>
                {score}
            </div>
        )
}

export default EndScreen