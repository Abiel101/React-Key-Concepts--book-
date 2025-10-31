import { Link } from "react-router-dom";
import AnimatePageTransition from "../Components/AnimatePageTransition.jsx";

const Events = () => {
	return (
		<AnimatePageTransition>
			<h1>Events Page</h1>
			<Link to="/">Go Back Home</Link>
		</AnimatePageTransition>
	);
};

export default Events;
