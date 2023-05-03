import React from "react";
import banner from "../public/img/banner.jpg"
import "../public/App.css"

const Main = () => {
	return (
		<div>
			<img className="main-bg" src={banner}/>
		</div>
	);
}

export default Main