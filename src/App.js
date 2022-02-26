import React, { useState, useEffect } from 'react';
import getWordBank from './gameGlobals'

import { AiOutlineMenu } from 'react-icons/ai'

import { keyboardKeys, WORD_LENGTH, MAX_GUESSES } from './gameGlobals';

function App() {

	const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem('gameState')));
	const [wordBank, setWordBank] = useState(JSON.parse(localStorage.getItem('wordBank')));
	const [guess, setGuess] = useState('');

	const onKeyDown = (e) => {
		const key = e.key;
		if (key.length === 1 && key.match(/[a-z]/i)) {
			setGuess(currGuess => {
				return currGuess.length === WORD_LENGTH ? currGuess : currGuess + key;
			})
		}
		else if (key === 'Enter') {
			setGuess(currGuess => {
				if (currGuess.length === WORD_LENGTH) {
					console.log(wordBank)
					if (wordBank?.words?.includes(currGuess)) {
						console.log('You guessed ' + currGuess);
						return '';
					}
					console.log('Not in word bank');
					return currGuess;
				}
				console.log('Too short');
				return currGuess;
			})
		}
		else if (key === 'Backspace') {
			setGuess(currGuess => {
				return currGuess.length === 0 ? currGuess : currGuess.slice(0, -1);
			})
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => { document.removeEventListener('keydown', onKeyDown); }
	}, [])

	useEffect(() => {
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const currentDate = new Date();

		if (gameState && gameState?.solution) {
			if (currentDate.getDay() === (gameState?.day + 1) % 7) {
				setGameState(null);
				localStorage.removeItem('gameState');
			}
		}
		if (!gameState || !gameState.solution) {

			const newWordBank = getWordBank(days[currentDate.getDay()]);
			const wordIndex = Math.floor(Math.random() * newWordBank.words.length);
			const solution = newWordBank.words[wordIndex]?.toLowerCase();

			const newGameState = {
				...gameState,
				solution: solution,
				day: currentDate.getDay(),
				dayName: days[currentDate.getDay()],
				theme: newWordBank.theme,
				guesses: [],
				correctLetters: [],
				misplacedLetters: [],
				incorrectLetters: [],
				gameResult: 'playing'
			}
			setGameState(newGameState);
			setWordBank(newWordBank);
			localStorage.setItem('gameState', JSON.stringify(newGameState));
			localStorage.setItem('wordBank', JSON.stringify(newWordBank));
		}
	}, [gameState, wordBank]);

	return (
		<div className='main'>
			<div className="main-header">
				<h1 className='title'>Trivle</h1>
				<div className='header-menus'>
					<AiOutlineMenu />
				</div>
			</div>
			<div className='daily-info'>
				<h2>{gameState?.dayName}'s Theme: {gameState?.theme}</h2>
			</div>

			<div className='main-container'>
				<div className="word-row">
					{Array.from({length: 5}).map((_, i) => {
						return <span className={'letter-tile empty'} key={i}>{guess[i]?.toLocaleUpperCase() || ''}</span>
					})}
				</div>
			</div>
			
			<div className="footer">

			</div>
		</div>
	);
}

export default App;