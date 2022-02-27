import React from 'react'

const WordRow = ({ type, guess, solution }) => {
	const counts = {}
	if (type === 'previous') {
		for (let ch of solution) {
			if (!counts.hasOwnProperty(ch)) {
				counts[ch] = 0
			}
			counts[ch]++
		}
	}

	return (
		<div className='word-row'>{
			Array.from({length:5}).map((_, i) => {
				if (type === 'unused')
					return <span key={i} className={`letter-tile empty`}></span>
				else if (type === 'current')
					return <span key={i} className={`letter-tile empty`}>{guess[i]?.toUpperCase() || ''}</span>

 				const char = guess[i];
				
				let correctness = 'incorrect';
				if (counts.hasOwnProperty(char)) {
					if (char === solution[i]) correctness = 'correct';
					else correctness = 'misplaced';
					counts[char]--;
					if (counts[char] === 0) delete counts[char]
				}
				return <span key={i} className={`letter-tile ${correctness}`}>{guess[i]?.toUpperCase() }</span>
			})
		}</div>
	)
}

export default WordRow