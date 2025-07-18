import React, { useEffect } from 'react'

const Header = (props) => {
	useEffect(() => {
		//console.log('Header 실행');
	}, [props.title, props.desc])
	return (
		<>
			<header>
				<h1
					onClick={() => {
						props.onChangeMode();
					}}
				>{props.title}</h1>
				<p>{props.desc}</p>
				<p>{props.difficulty}</p>
			</header>
		</>
	)
}

export default Header;