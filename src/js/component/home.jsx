import React,  { useState, useEffect } from "react";
import Counter from "./Counter";
import './Counter.css'

//create your first component

const Home = () => {
	const [counter, setCounter] = useState(0);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)  
		
		
	return () => clearInterval(interval)
	}, [counter])
	
	const calculateSeconds = (aCounter, placeValue) => {

		return Math.floor(aCounter / placeValue) % 10
	}

	return (
		<div className="text-center">
			<Counter 
				thousandsDigit = {calculateSeconds(counter, 1000)}
				hundredsDigit = {calculateSeconds(counter, 100)}
				tensDigit = {calculateSeconds(counter, 10)}
				onesDigit = {calculateSeconds(counter, 1)}
			/>
		</div>
	);
}
export default Home;
