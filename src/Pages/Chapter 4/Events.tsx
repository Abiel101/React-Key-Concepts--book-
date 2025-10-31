import { Link } from "react-router-dom";
import AnimatePageTransition from "../../Components/AnimatePageTransition.js";

const Events = () => {
	return (
		<AnimatePageTransition type="page">
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<h1>Chapter 4: Working with Events and State</h1>
				<Link to="/">Go Back Home</Link>
			</div>
		</AnimatePageTransition>
	);
};

export default Events;
