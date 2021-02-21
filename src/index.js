import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Body from './body'
//import './Home.css'

const App = () => (
	<>
		<Header />
		<Body />
	</>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
