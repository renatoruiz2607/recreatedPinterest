import React from 'react'
import { Pinterest, Home, Following, Search, Notifications, Inbox, Menu } from './Home'

const Header = () => (
	<div className='header'>
		<Pinterest />
		<Home name='Home' />
		<Following name='Following' />
		<Search placeholder='Search' />
		<Notifications />
		<Inbox />
		<Menu />
	</div>
)

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Header />, rootElement)

export default Header
