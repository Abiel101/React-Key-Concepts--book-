import { Link } from "react-router-dom";
import AnimatePageTransition from "./Components/AnimatePageTransition.jsx";
import { Button } from "./Components/ui/button.js";
import { Card } from "./Components/ui/card.js";
import { MessageSquareMore } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const pageText = {
	heading: "React Key Concepts",
};

function App() {
	const [message, setMessage] = useState(false);

	function handleMessage() {
		setMessage(!message);
	}
	return (
		<AnimatePageTransition type="landingPage">
			<div className="w-screen h-screen bg-primary flex flex-col items-center justify-center text-center text-foreground relative">
				<h1 className="text-[248px] thunder-bold font-black text-background">
					{pageText.heading.toUpperCase()}
				</h1>
				<h2 className="text-2xl font-bold text-foreground/70 mb-4">
					An in-depth guide to React's core features
				</h2>
				<motion.div
					className="bg-background text-s rounded-full bottom-60 overflow-hidden absolute flex items-center justify-center cursor-pointer"
					style={{
						width: message ? "1000px" : "150px",
						height: message ? "150px" : "150px",
						margin: "0 auto",
					}}
					animate={{
						width: message ? "1000px" : "150px",
						height: message ? "150px" : "150px",
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					onClick={handleMessage}
				>
					{message ? (
						<motion.div
							className="overflow-hidden px-20 py-10 text-left text-foreground"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, delay: 0.5, ease: "linear" }}
						>
							<MessageSquareMore className="absolute bottom-26 left-13 opacity-80 scale-x-[-1]" />
							<p>
								This site is inspired by the book{" "}
								<strong className="text-primary">
									"React Key Concepts" by Maximillian Schwarezmuller
								</strong>
								. It serves as a companion to the book, providing interactive
								examples and exercises to help reinforce the concepts covered in
								each chapter.
							</p>
						</motion.div>
					) : (
						<motion.div className="bg-transparent border-0 relative flex items-center justify-center">
							<motion.div
							className="bg-background border-0"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1, delay: 0.5, ease: "linear" }}
							>
								<MessageSquareMore className="bg-background scale-x-[-1]" />
							</motion.div>
						</motion.div>
					)}
				</motion.div>
			</div>

			{/* Link to Events Page */}
			<div className="w-full h-screen text-6xl p-20 bg-[#181b21]">
				<h2 className="text-4 thunder-bold text-secondary-foreground mb-4 text-[248px]">
					EXPLORE ALL EXERCISES AND CHAPTERS
				</h2>
				<div>
					{/* Make this area bigger so that it's like drop downs of the chapters with short summariez and then reach out to the author to maybe even just read over it if he likes it! */}
					<Button asChild variant="outline">
						<Link to="/events">OPEN CHAPTER</Link>
					</Button>
				</div>
			</div>
		</AnimatePageTransition>
	);
}

export default App;
