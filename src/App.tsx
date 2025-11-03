import AnimatePageTransition from "./Components/AnimatePageTransition.jsx";
import { MessageSquareMore } from "lucide-react";
import { motion, AnimatePresence, easeInOut } from "motion/react";
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

	return (
		<AnimatePageTransition type="landingPage">
			{/* =================================== HEADER ========================================= */}
			<div className="w-full h-screen bg-primary flex flex-col items-center justify-center text-center text-foreground relative overflow-hidden">
				<h1 className="text-[150px] text-shadow-lg leading-30 lg:leading-50 lg:text-[248px] thunder-bold font-black text-background z-10">
					{pageText.heading.toUpperCase()}
				</h1>
				<h2 className="text-2xl font-bold text-foreground/70 mb-4 z-10">
					An in-depth guide to React's core features
				</h2>
				{/* ============================== Message animation (turn into separate component) ============================= */}
				<motion.div
					className="max-w-150 lg:max-w-200 bg-background text-xs lg:text-sm font-light lg:font-normal rounded-full bottom-30 lg:bottom-90 overflow-hidden flex items-center justify-center cursor-pointer absolute z-10"
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
				{/* ========================== Wave animation (turn into separate component) ========================= */}
				<motion.svg
					width="3567"
					height="851"
					viewBox="0 0 3567 851"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute -bottom-100"
					initial={{ bottom: -500 }}
					whileInView={{ bottom: -300 }}
					exit={{ bottom: -500 }}
					transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
				>
					<path
						d="M445 274.618C188.98 252.089 0.5 197.227 0.5 197.227V850.5L3566.5 832.887V434.999C3566.5 434.999 3551.93 75.1453 3331 15.6213C2947.3 -87.7546 2789.19 374.303 2401 331.908C2088.01 297.725 1812.51 66.4766 1499.5 32.629C1161.21 -3.95237 783.549 304.411 445 274.618Z"
						fill="#2778BB"
						stroke="#2778BB"
					/>
				</motion.svg>
				<motion.svg
					width="3567"
					height="851"
					viewBox="0 0 3567 851"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute -bottom-100"
					initial={{ bottom: -500 }}
					whileInView={{ bottom: -400 }}
					exit={{ bottom: -500 }}
					transition={{ duration: 1, delay: 0.1, ease: easeInOut }}
				>
					<path
						d="M525.25 2.20456C269.23 -20.522 0.5 191.518 0.5 191.518V850.5L3566.5 832.733V431.368C3566.5 431.368 3328.18 574.664 3107.25 514.619C2723.55 410.34 2449.44 106.206 2061.25 63.4402C1748.26 28.9585 1578.26 416.471 1265.25 382.327C926.961 345.426 863.799 32.2571 525.25 2.20456Z"
						fill="#235E8F"
						stroke="#235E8F"
					/>
				</motion.svg>

				<motion.svg
					width="3567"
					height="851"
					viewBox="0 0 3567 851"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute -bottom-100"
					initial={{ bottom: -500 }}
					exit={{ bottom: -500 }}
					whileInView={{ bottom: -450 }}
					transition={{ duration: 1, delay: 0, ease: easeInOut }}
				>
					<path
						d="M614.914 302.962C358.894 291.117 0.5 108.079 0.5 108.079V850.5H3566.5V233.091C3566.5 233.091 3281.5 36.6714 3060.57 5.37596C2676.88 -48.9751 2538.88 369.448 2150.7 347.158C1837.7 329.186 1742.31 67.3677 1429.3 49.5719C1091.01 30.3389 953.463 318.626 614.914 302.962Z"
						fill="#181B21"
						stroke="#181B21"
					/>
				</motion.svg>

				{/* ============================ Arrow animation ============================== */}
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
						className="lucide lucide-arrow-down-icon lucide-arrow-down animate-bounce scale-200 lg:scale-400 absolute bottom-15 lg:bottom-20 right-20 text-accent"
					>
						<path d="M12 5v14" />
						<path d="m19 12-7 7-7-7" />
					</svg>
				</div>
			</div>

			{/* ===========================CHAPTERS ================================= */}
			<div className="w-full min-h-screen bg-[#181b21] py-20 pb-40">
				<div className="p-20">
					<div className="relative">
						<motion.div
							initial={{ width: 0, overflow: "hidden", color: "none" }}
							whileInView={{ width: "100%", color: "transparent" }}
							transition={{ duration: 1, ease: "easeInOut" }}
							className=" absolute bg-background/10 w-full h-90"
						></motion.div>
						{/* TODO: Make backgroubnd animation on scroll. */}
						<motion.h2
							initial={{ opacity: 0, bottom: -10 }}
							whileInView={{ opacity: 1, bottom: 20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="thunder-bold text-secondary-foreground leading-30 text-[150px] lg:text-[240px] lg:leading-50 relative bottom-10 right-5"
						>
							EXPLORE ALL EXERCISES AND CHAPTERS
						</motion.h2>
					</div>
				</div>
				<AccordionChapters />
			</div>
			{/*======================= FOOTER ============================== */}
			<footer className="w-full h-screen bg-background p-20 flex items-center justify-center">
				<motion.h2
					initial={{ opacity: 0, bottom: -10 }}
					whileInView={{ opacity: 1, bottom: 20 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="thunder-bold leading-20 text-[100px] lg:text-[180px] lg:leading-50 relative"
				>
					DESIGNED AND BUILT BY{" "}
					<strong className="text-primary">
						<br />
						ABIEL ORTEGA.
					</strong>
				</motion.h2>{" "}
			</footer>
		</AnimatePageTransition>
	);
}

export default App;
