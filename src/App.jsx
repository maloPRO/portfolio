// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/nav";

const App = () => {


	return (
		<div className="bg-[url('./images/header.jpg')] bg-cover bg-center h-screen">
			<Nav />
			<Hero />
		</div>
	)
}

export default App;