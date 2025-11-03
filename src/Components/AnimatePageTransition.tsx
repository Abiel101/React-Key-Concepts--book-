import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button.js";
import { chapterData } from "@/listOfChapters.js";

type Props = {
	children?: ReactNode;
	type?: string;
	title?: string;
};

//TODO: Update this to be "PageTypeLayout"
// Here we can accept the children, type of page, and title for the page
const AnimatePageTransition = ({ children, type, title }: Props) => {
	const [pageType, setPageType] = useState<string>(type ?? "page");
	function handlePageTypeChange(type: string) {
		setPageType(type);
	}
	useEffect(() => {
		handlePageTypeChange(type ?? "page");
	}, [type]);

	// find current chapter based on the URL
	const currentChapter = chapterData.find(
		(chapter) => chapter.chapterLink === location.pathname
	);

	//IMPORTANT: THIS HAS NOW CONVERTED INTO A PAGE TRANSITION BUT ALSO PAGE TEMPLATE FOR ALL MY BUTTONS PAGES WHO'S TYPES ARE OF TYPE 'PAGE'.
	return (
		<>
			{/* TODO: Update this to have separate components for the pages with the Motion.Div to make it easier to manage animations and create more organization */}
			{pageType === "landingPage" ? (
				// If the page is type: 'landingPage'
				<motion.div
					style={{ position: "absolute", width: "100%" }} // 👈 this line is crucial
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					{children}
				</motion.div>
			) : (
				// If the page is type: 'page'
				<motion.div
					className="absolute w-full"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					{currentChapter ? (
					<div className="h-screen flex flex-col items-center justify-center">
						<h1 className="thunder-bold text-[240px]">{currentChapter.title?.toUpperCase()}</h1>
						<h2 className="text-3xl text-muted-foreground mb-20">
							{currentChapter.subTitle}
						</h2>
						<Button
							variant="outline"
							asChild
							className="absolute top-20 left-20"
						>
							<Link to="/">
								{" "}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/><path d="M20 9v6"/></svg>
								Home
							</Link>
						</Button>
					</div>
					) : (
						<h1>Page not found</h1>
					)}
					{children}
				</motion.div>
			)}
		</>
	);
};

export default AnimatePageTransition;
