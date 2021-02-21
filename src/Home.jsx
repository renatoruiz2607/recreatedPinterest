import React from 'react'
import './fundoPreto.css'
import PinterestLogo from './assets/img/pinterest_PNG45.png'
import NotificationsIMG from './assets/img/black-bell-png-icon-clipart-free.png'
import InboxIMG from './assets/img/kisspng-speech-balloon-symbol-computer-icons-chat-5ac3f3d82ab418.1732423515227913841749.png'
import MenuIMG from './assets/img/Arrow-down.svg.png'

const Pinterest = () => (
	<div className='pinterest'>
		<img className='pinterestLogo' src={PinterestLogo} alt='logoImg'></img>
	</div>
)

const Home = props => {
	const { name } = props
	return <button className='fundoPreto fundoPretoMenor'>{name}</button>
}

const Following = props => {
	const { name } = props
	return <button className='fundoPreto rightMargin'>{name}</button>
}

// const Search = (props) => {
//     const { placeholder } = props
//     return (
//         <input className="search" placeholder={placeholder}></input>
//     )
// }

const Search = ({ placeholder }) => <input className='search' placeholder={placeholder}></input>

// const Notifications = () => {
// 	const [selected, setSelected] = useState(false)
// 	return (
// 		<div className={selected ? 'notifications selected' : 'notifications'} onClick={() => setSelected(!selected)}>
// 			<img className='notificationsImg' src={NotificationsIMG} alt='notificationsImg'></img>
// 		</div>
// 	)
// }

const Notifications = () => (
	<div className='notifications leftMargin'>
		<img className='notificationsImg' src={NotificationsIMG} alt='notificationsImg'></img>
	</div>
)

const Inbox = () => (
	<div className='notifications'>
		<img className='inboxImg' src={InboxIMG} alt='inboxImg'></img>
	</div>
)

const Menu = () => (
	<div className='menu'>
		<img className='menuImg' src={MenuIMG} alt='menuImg'></img>
	</div>
)

export { Pinterest, Home, Following, Search, Notifications, Inbox, Menu }
