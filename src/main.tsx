import { AnimatePresence } from "motion/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import Events from "./Pages/Chapter 4/Events.js";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			{/*Added framer motion to transition between pages, even though this is a simple animation it is still nice that I can do this now with react.*/}
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<App />} />
				<Route path="/events" element={<Events />} />
			</Routes>
		</AnimatePresence>
	);
}

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<AnimatedRoutes />
	</BrowserRouter>
);
