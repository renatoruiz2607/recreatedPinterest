import React, { useState, useEffect } from 'react'
import './body.css'
//import ReactDOM from 'react-dom'

const imgsArray = [
	'https://i.pinimg.com/236x/75/d5/f2/75d5f2ff4612b099d38973be74fe8199.jpg',
	'https://i.pinimg.com/236x/20/49/19/204919a0bb8889cb9339d09dfc70d884.jpg',
	'https://i.pinimg.com/236x/46/f6/0e/46f60e448843043ecb972a9a7706d276.jpg',
	'https://i.pinimg.com/236x/22/8b/3d/228b3d529fb1ba4b1c927efb30b2f0fa.jpg',
	'https://i.pinimg.com/236x/3f/2c/5d/3f2c5dec50fcaeb69fd276b7590ed974.jpg',
	'https://i.pinimg.com/236x/3f/2c/5d/3f2c5dec50fcaeb69fd276b7590ed974.jpg',
	'https://i.pinimg.com/236x/75/d5/f2/75d5f2ff4612b099d38973be74fe8199.jpg',
	'https://i.pinimg.com/236x/20/49/19/204919a0bb8889cb9339d09dfc70d884.jpg',
	'https://i.pinimg.com/236x/46/f6/0e/46f60e448843043ecb972a9a7706d276.jpg',
	'https://i.pinimg.com/236x/22/8b/3d/228b3d529fb1ba4b1c927efb30b2f0fa.jpg',
]

const renderPictures = (pictureList, key) => (
	<div className='subBody' key={key}>
		{pictureList.map((picture, index) => (
			<img key={index} className='marginBottom' src={picture} alt='primeira imagem' />
		))}
	</div>
)

const renderObjectKeys = obj => {
	let renderedPictures = []
	for (let key in obj) {
		renderedPictures.push(renderPictures(obj[key], key))
	}
	return renderedPictures
}

const Body = () => {
	const [groupedImages, setGroupedImages] = useState({
		firstGroup: [],
		secondGroup: [],
		thirdGroup: [],
		fourthGroup: [],
		fifthGroup: [],
	})

	useEffect(() => {
		let firstGroup = []
		let secondGroup = []
		let thirdGroup = []
		let fourthGroup = []
		let fifthGroup = []
		imgsArray.forEach((picture, index) => {
			let customIndex = index
			while (customIndex > 4) {
				customIndex -= 5
			}
			if (customIndex === 0) {
				firstGroup.push(picture)
			} else if (customIndex % 4 === 0) {
				fifthGroup.push(picture)
			} else if (customIndex % 3 === 0) {
				fourthGroup.push(picture)
			} else if (customIndex % 2 === 0) {
				thirdGroup.push(picture)
			} else {
				secondGroup.push(picture)
			}
		})
		setGroupedImages({
			firstGroup: firstGroup,
			secondGroup: secondGroup,
			thirdGroup: thirdGroup,
			fourthGroup: fourthGroup,
			fifthGroup: fifthGroup,
		})
	}, [])
	return <div className='body'>{renderObjectKeys(groupedImages)}</div>
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Body />, rootElement)

export default Body
