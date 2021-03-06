import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { keyboardKeys, WORD_LENGTH, MAX_GUESSES, getAllWords, getWordBank, getOfficialWord } from './gameGlobals';
import WordRow from './components/WordRow';
import MenuBar from './components/MenuBar';
import DeletePrompt from './components/DeletePrompt';

function App() {

	const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem('gameState')));
	const [wordBank, setWordBank] = useState(JSON.parse(localStorage.getItem('wordBank')));
	const [stats, setStats] = useState(JSON.parse(localStorage.getItem('stats')));
	const [guess, setGuess] = useState('');

	const [deleteMenuActive, setDeleteMenuActive] = useState(false);
	const [statsMenuActive, setStatsMenuActive] = useState(false);
	const [settingsMenuActive, setSettingsMenuActive] = useState(false);
	
	const weekdays = useMemo(() => (["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), [])
	const getAbsoluteDay = () => {
		return Math.floor(Math.abs((new Date(process.env.REACT_APP_START_DATE) - new Date()) / (24*3600*1000)))
	}
	
	const onKeyDown = useCallback(
		(e) => {
			if (gameState?.gameResult !== 'playing') return;
			const key = e.key;
			if (key.length === 1 && key.match(/[a-z]/i)) {
				setGuess(currGuess => {
					return currGuess.length === WORD_LENGTH ? currGuess : currGuess + key;
				})
			}
			else if (key === 'Enter' || key === 'Submit') {
				setGuess(currGuess => {
					if (currGuess.length === WORD_LENGTH) {
						if (wordBank?.all?.includes(currGuess)) {
							setGameState(prev => {
								return {...prev, guesses: [...prev.guesses, currGuess]}
							});
							return '';
						}
						alert('Not in word bank');
						return currGuess;
					}
					alert('Too short');
					return currGuess;
				})
			}
			else if (key === 'Backspace' || key === 'Delete') {
				setGuess(currGuess => {
					return currGuess.length === 0 ? currGuess : currGuess.slice(0, -1);
				})
			}
		},
	  	[gameState?.gameResult, wordBank?.all],
	);

	useEffect(() => {
		if (gameState?.gameResult === 'playing')
		{
			if (deleteMenuActive || settingsMenuActive || statsMenuActive) return;
			document.addEventListener('keydown', onKeyDown);
			return () => { document.removeEventListener('keydown', onKeyDown); }
		}
		localStorage.setItem('stats', JSON.stringify(stats));
	}, [gameState, onKeyDown, stats, deleteMenuActive, settingsMenuActive, statsMenuActive])

	useEffect(() => {
		if (gameState?.gameResult !== 'playing' || gameState?.guesses.length === 0) return;
		if (gameState?.guesses[gameState?.guesses.length - 1] === gameState?.solution) {
			setGameState(prev => ({...prev, gameResult: 'win'}))
			setStats(prevStats => {
				const newDistribution = [...prevStats?.distribution];
				newDistribution[gameState?.guesses?.length - 1] += 1
				const newStats = {
					distribution: newDistribution,
					gamesPlayed: prevStats?.gamesPlayed + 1,
					gamesWon: prevStats?.gamesWon + 1,
					winStreak: prevStats?.winStreak + 1,
					maxStreak: Math.max(prevStats?.winStreak + 1, prevStats?.maxStreak),
				}
				return newStats
			})
		}
		else if (gameState?.guesses.length === MAX_GUESSES) {
			setGameState(prev => ({...prev, gameResult: 'lose'}))
			setStats(prevStats => {
				const newStats = {
					distribution: prevStats?.distribution,
					gamesPlayed: prevStats?.gamesPlayed + 1,
					gamesWon: prevStats?.gamesWon,
					winStreak: 0,
					maxStreak: prevStats?.maxStreak,
				}
				return newStats
			})
		}
		
		setGameState(prev => {
			const newState = {...prev}
			if (prev?.guesses == null) return prev;
			for (let i = 0; i < 5; i++) {
				const char = prev?.guesses[prev?.guesses?.length - 1][i];
	
				let correctness = 'incorrect';
				if (char === prev?.solution[i])
					correctness = 'correct';
				else if (prev?.solution?.includes(char))
					correctness = 'misplaced';
	
				if (!prev?.letters[correctness]?.includes(char))
					newState?.letters[correctness]?.push(char)
			}
			localStorage.setItem('gameState', JSON.stringify(newState));
			return newState;
		})

	}, [gameState?.guesses?.length, gameState?.guesses, gameState?.solution, gameState?.absoluteDay, gameState?.gameResult])

	useEffect(() => {

		const currentJSDay = new Date().getDay();
		const currentDay = getAbsoluteDay();

		if (gameState && gameState?.solution) {
			if (currentJSDay === (gameState?.weekday + 1) % 7) {
				setGameState(null);
				localStorage.removeItem('gameState');
			}
		}
		if (!gameState) {

			const newWordBank = {
				difficulty: getWordBank(weekdays[currentJSDay]).difficulty,
				all: Array.from(getAllWords())
			}

			const newGameState = {
				...gameState,
				solution: getOfficialWord(currentDay),
				weekday: currentJSDay,
				absoluteDay: currentDay,
				theme: getWordBank(weekdays[currentJSDay]).theme,
				guesses: [],
				letters: {
					correct: [],
					incorrect: [],
					misplaced: []
				},
				gameResult: 'playing'
			}
			setGameState(newGameState);
			setWordBank(newWordBank);
			localStorage.setItem('gameState', JSON.stringify(newGameState));
			localStorage.setItem('wordBank', JSON.stringify(newWordBank));
		}
	}, [gameState, wordBank, weekdays]);

	useEffect(() => {
		if (!stats) {
			const newStats = {
				...stats,
				distribution: [0, 0, 0, 0, 0, 0],
				gamesPlayed: 0,
				gamesWon: 0,
				winStreak: 0,
				maxStreak: 0,
				lastDayPlayed: getAbsoluteDay(),
			}

			setStats(newStats);
			localStorage.setItem('stats', JSON.stringify(newStats));
		}
	}, [stats])

	const onDeleteClick = () => {
		setDeleteMenuActive(prev => !prev);
	}

	const onStatsClick = () => {
		setStatsMenuActive(prev => prev)
	}

	const onSettingsClick = () => {
		setSettingsMenuActive(prev => prev)
	}

	const checkDeleteConfirm = (e) => {
		e.preventDefault();
		if (document.querySelector('.delete-data-input').value === 'CONFIRM') {
			localStorage.removeItem('gameState');
			localStorage.removeItem('wordBank');
			localStorage.removeItem('stats');
		}
		window.location.reload();
	}

	return (
		<div className='main'>
			<div className="main-header">
				<h2 className='number'>{`#${'000'.substring(0, 3 - ('' + (gameState?.absoluteDay + 1)).length) + (gameState?.absoluteDay + 1)}`}</h2>
				<h1 className='title'>Trivle</h1>
				<MenuBar onStatsClick={onStatsClick} onSettingsClick={onSettingsClick} onDeleteClick={onDeleteClick}/>
			</div>
			<div className='game-body'>
				<div className='daily-info'>
					<h2>{weekdays[gameState?.weekday]}'s Theme: {gameState?.theme}</h2>
				</div>
				<div className='outer-container'>
					<div className='main-container'>
						{Array.from({length: MAX_GUESSES}).map((_, i) => {
							if (i < gameState?.guesses.length)
								return <WordRow key={i} solution={gameState?.solution} type='previous' guess={gameState?.guesses[i]}/>
							else if (i === gameState?.guesses.length) 
								return <WordRow key={i} solution={gameState?.solution} type='current' guess={guess} />
							else
								return <WordRow key={i} solution={gameState?.solution} type='unused' />
						})}
					</div>
					<div className="keyboard">
						{keyboardKeys.map((row, i) => (
							<div key={i} className='keyboard-row'>
								{row.map((letter, j) => (
									<button className={`keyboard-key ${
											gameState?.letters?.correct?.includes(letter) ? 'correct' : 
											(gameState?.letters?.incorrect?.includes(letter) ? 'incorrect' : 
											(gameState?.letters?.misplaced?.includes(letter) ? 'misplaced' : ''))
										}`} key={j} onClick={() => {onKeyDown({key: letter})}}>
										{letter.toUpperCase()}
									</button>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
			{(deleteMenuActive || settingsMenuActive || statsMenuActive) &&
				<div className='popup-overlay'></div>
			}
			{deleteMenuActive &&
				<DeletePrompt onSubmit={checkDeleteConfirm} onClose={onDeleteClick}/>
			}
		</div>
	);
}

export default App;