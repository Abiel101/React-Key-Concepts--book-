import { AnimatePresence } from "motion/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App.js";
// Not sure if there is a way for me to do this
// import { chapterData } from "./listOfChapters.js";
import GettingStarted from "./Pages/gettingStarted.js";
import Chapter1 from "./Pages/Chapter_1/Chapter1.js";
import Chapter2 from "./Pages/Chapter_2/Chapter2.js";
import Chapter3 from "./Pages/Chapter_3/Chapter3.js";
import Chapter4 from "./Pages/Chapter_4/Chapter4.js";
import Chapter5 from "./Pages/Chapter_5/Chapter5.js";
import Chapter6 from "./Pages/Chapter_6/Chapter6.js";
import Chapter7 from "./Pages/Chapter_7/Chapter7.js";
import Chapter8 from "./Pages/Chapter_8/Chapter8.js";
import Chapter9 from "./Pages/Chapter_9/Chapter9.js";
import Chapter10 from "./Pages/Chapter_10/Chapter10.js";
import Chapter11 from "./Pages/Chapter_11/Chapter11.js";
import Chapter12 from "./Pages/Chapter_12/Chapter12.js";
import Chapter13 from "./Pages/Chapter_13/Chapter13.js";
import Chapter14 from "./Pages/Chapter_14/Chapter14.js";
import Chapter15 from "./Pages/Chapter_15/Chapter15.js";
import Chapter16 from "./Pages/Chapter_16/Chapter16.js";
import Chapter17 from "./Pages/Chapter_17/Chapter17.js";
import Chapter18 from "./Pages/Chapter_18/Chapter18.js";
import { useEffect } from "react";

function AnimatedRoutes() {
	const location = useLocation();
//TODO: Re do these routes so that it works better for routing to each chapter.
	return (
		<AnimatePresence mode="wait">
			{/*Added framer motion to transition between pages, even though this is a simple animation it is still nice that I can do this now with react.*/}
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<App />} />
				<Route
					path="/chapter-0"
					element={<GettingStarted title="Getting Started" />}
				/>
				<Route path="/chapter-1" element={<Chapter1 title="Chapter 1" />} />
				<Route path="/chapter-2" element={<Chapter2 title="Chapter 2" />} />
				<Route path="/chapter-3" element={<Chapter3 title="Chapter 3" />} />
				<Route path="/chapter-4" element={<Chapter4 title="Chapter 4" />} />
				<Route path="/chapter-5" element={<Chapter5 title="Chapter 5" />} />
				<Route path="/chapter-6" element={<Chapter6 title="Chapter 6" />} />
				<Route path="/chapter-7" element={<Chapter7 title="Chapter 7" />} />
				<Route path="/chapter-8" element={<Chapter8 title="Chapter 8" />} />
				<Route path="/chapter-9" element={<Chapter9 title="Chapter 9" />} />
				<Route path="/chapter-10" element={<Chapter10 title="Chapter 10" />} />
				<Route path="/chapter-11" element={<Chapter11 title="Chapter 11" />} />
				<Route path="/chapter-12" element={<Chapter12 title="Chapter 12" />} />
				<Route path="/chapter-13" element={<Chapter13 title="Chapter 13" />} />
				<Route path="/chapter-14" element={<Chapter14 title="Chapter 14" />} />
				<Route path="/chapter-15" element={<Chapter15 title="Chapter 15" />} />
				<Route path="/chapter-16" element={<Chapter16 title="Chapter 16" />} />
				<Route path="/chapter-17" element={<Chapter17 title="Chapter 17" />} />
				<Route path="/chapter-18" element={<Chapter18 title="Chapter 18" />} />
			</Routes>
		</AnimatePresence>
	);
}

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Scroll to top on route change
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth", // or "auto" if you prefer instant jump
		});
	}, [pathname]);

	return null; // this component doesn’t render anything
}

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<ScrollToTop />
		<AnimatedRoutes />
	</BrowserRouter>
);
