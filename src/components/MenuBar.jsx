import React from 'react'

import { AiOutlineDelete, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai'

const MenuBar = ({ onStatsClick, onSettingsClick, onDeleteClick }) => {
	return (
		<div className='header-menus'>
			<button className='menu-button' onClick={onStatsClick}><AiOutlineBarChart /></button>
			<button className='menu-button' onClick={onSettingsClick}><AiOutlineSetting /></button>
			<button className='menu-button' onClick={onDeleteClick}><AiOutlineDelete /></button>
		</div>
	)
}

export default MenuBar