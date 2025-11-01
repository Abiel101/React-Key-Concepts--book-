import AnimatePageTransition from "./Components/AnimatePageTransition.jsx";
import { MessageSquareMore } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import AccordionChapters from "./Components/AccordionChapters.js";

const pageText = {
	heading: "React Key Concepts",
};

function App() {
	const [message, setMessage] = useState(false);

	function handleMessage() {
		setMessage(!message);
	}

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setMessage(true);
	// 	}, 1000);

	// 	return () => clearTimeout(timer);
	// }, []);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setMessage(false);
	// 	}, 8000);

	// 	return () => clearTimeout(timer);
	// });

	return (
		<AnimatePageTransition type="landingPage">
			<div className="w-screen h-screen bg-primary flex flex-col items-center justify-center text-center text-foreground relative">
				<h1 className="text-[248px] thunder-bold font-black text-background">
					{pageText.heading.toUpperCase()}
				</h1>
				<h2 className="text-2xl font-bold text-foreground/70 mb-4">
					An in-depth guide to React's core features
				</h2>

				{/* Message animation */}
				<motion.div
					className="bg-background text-s rounded-full bottom-80 overflow-hidden flex items-center justify-center cursor-pointer absolute"
					style={{
						width: message ? "1000px" : "100px",
						height: message ? "100px" : "100px",
					}}
					animate={{
						width: message ? "1000px" : "100px",
						height: message ? "100px" : "100px",
					}}
					transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
					onClick={handleMessage}
				>
					<AnimatePresence mode="wait">
						{message ? (
							<motion.div
								key="message"
								className="overflow-hidden px-20 py-10 text-left text-foreground"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: "linear" }}
							>
								<p>
									This site is inspired by the book{" "}
									<strong className="text-primary">
										"React Key Concepts" by Maximillian Schwarezmuller
									</strong>
									. It serves as a companion to the book, providing interactive
									examples and exercises to help reinforce the concepts covered
									in each chapter.
								</p>
							</motion.div>
						) : (
							<motion.div className="bg-transparent border-0 relative flex items-center justify-center">
								<motion.div
									key="icon"
									className="bg-background border-0"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 1, ease: "linear" }}
								>
									<MessageSquareMore className="bg-background scale-x-[-1] animate-caret-blink" />
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-arrow-down-icon lucide-arrow-down animate-bounce scale-400 absolute bottom-20 right-20 text-accent"
					>
						<path d="M12 5v14" />
						<path d="m19 12-7 7-7-7" />
					</svg>
				</div>
			</div>

			{/* Link to Events Page */}
			<div className="w-full h-screen bg-[#181b21]">
				<div className="p-20">
					<div className="bg-background/10">
					{/* TODO: Make backgroubnd animation on scroll. */}
						<h2 className="thunder-bold text-secondary-foreground text-[240px] leading-50 relative bottom-10 right-5">
							EXPLORE ALL EXERCISES AND CHAPTERS
						</h2>
					</div>
				</div>
				<AccordionChapters />
			</div>
		</AnimatePageTransition>
	);
}

export default App;
