import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
	children: ReactNode;
	type?: string;
};

const AnimatePageTransition = ({ children, type }: Props) => {
	const [pageType, setPageType] = useState<string>(type?? "page");

	function handlePageTypeChange(type: string) {
		setPageType(type);
	}

	useEffect(() => {
		handlePageTypeChange(type ?? "page");
	}, [type]);

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
					style={{ position: "absolute", width: "100%" }} // 👈 this line is crucial
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					{children}
				</motion.div>
			)}
		</>
	);
};

export default AnimatePageTransition;
