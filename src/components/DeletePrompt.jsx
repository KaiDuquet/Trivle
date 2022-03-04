import React from 'react'

import { AiOutlineClose } from 'react-icons/ai';

const DeletePrompt = ({ onSubmit, onClose }) => {
	return (
		<form className='delete-container' onSubmit={onSubmit}>
			<div className='delete-header'>
				<h3 className='delete-data-label'>Reset all data?</h3>
				<button onClick={onClose} className='menu-button'><AiOutlineClose size={20} color='white'/></button>
			</div>
			<p className='delete-data-label'>Enter CONFIRM exactly as shown to confirm reset</p>
			<input type='text' name='delete-data' className='delete-data-input' placeholder='Type CONFIRM...'></input>
			<input type='submit' hidden />
		</form>
	)
}

export default DeletePrompt