import { motion } from "motion/react";

const AnimatePageTransition = ({ children }) => {
	return (
		<motion.div
			style={{ position: "absolute", width: "100%" }} // 👈 this line is crucial
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatePageTransition;
