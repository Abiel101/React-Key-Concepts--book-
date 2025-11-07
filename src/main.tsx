import { AnimatePresence } from "motion/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import { useEffect } from "react";
import ChapterPageTemplate from "./Components/chapterPageTemplate.js";

function AnimatedRoutes() {
	const location = useLocation();
//TODO: Re do these routes so that it works better for routing to each chapter.
	return (
		<AnimatePresence mode="wait">
			{/*Added framer motion to transition between pages, even though this is a simple animation it is still nice that I can do this now with react.*/}
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<App />} />
				<Route path="/:chapter" element={<ChapterPageTemplate />} />
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
