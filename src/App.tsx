import { Link } from "react-router-dom";
import AnimatePageTransition from "./Components/AnimatePageTransition.jsx";
import { Button } from "./Components/ui/button.js";

const pageText = {
	heading: "React Key Concepts Book",
};

function App() {
	return (
		<AnimatePageTransition type="landingPage">
			<div className="w-screen h-screen bg-primary flex flex-col items-center justify-center text-center text-foreground">
				<h1 className="text-6xl font-black text-background">
					{pageText.heading.toUpperCase()}
				</h1>
				<h2 className="text-4 font-bold text-foreground mb-4">
					An in-depth guide to React's core features
				</h2>
				<p>
					Here we are going to be building a whole site dedicated to this book
					where I get to practice my <br /> learning with the{" "}
					<strong>React Key Concepts Book by Maximillian Schwarezmuller</strong>
				</p>
				<p>
					I will also be creating this a way to share my knowledge on by coding
					stuff which is something I first <br />
					did when I was building my knowledge with HTML and CSS. This helped a
					lot to get some practice in Coding the things I learn while still
					building something at the same time.
				</p>
			</div>

			{/* Link to Events Page */}
			<div className="w-full h-screen text-6xl pt-20">
				<h2 className="text-4 font-black text-foreground mb-4 text-6xl">
					EXPLORE ALL EXERCISES AND CHAPTERS
				</h2>
				<div>
					{/* Make this area bigger so that it's like drop downs of the chapters with short summariez and then reach out to the author to maybe even just read over it if he likes it! */}
					<Button
						asChild
						variant="outline"
						className="w-full rounded-none text-3xl h-16 text-left"
					>
						<Link to="/events">CHAPTER 4: Working with Events and State</Link>
					</Button>
				</div>
			</div>
		</AnimatePageTransition>
	);
}

export default App;
