import { Link } from "react-router-dom";
import AnimatePageTransition from "./Components/AnimatePageTransition.jsx";

function App() {
	return (
		<AnimatePageTransition>
			<h1>React Key Concepts Book</h1>
			<p>
				Here we are going to be building a whole site dedicated to this book
				where I get to practice my <br /> learning with the{" "}
				<strong>React Key Concepts Book by Maximillian Schwarezmuller</strong>
			</p>
			<p>
				I will also be creating this a way to share my knowledge on by coding
				stuff which is something I first did when I was building my knowledge
				with HTML and CSS. This helped a lot to get some practice in Coding the
				things I learn while still building something at the same time.
			</p>

			<Link to="/events">Events</Link>
		</AnimatePageTransition>
	);
}

export default App;
