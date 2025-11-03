import AnimatePageTransition from "../Components/AnimatePageTransition.js";

interface chapterProps {
	title: string;
}

const GettingStarted = ({ title }: chapterProps) => {
	return (
		<AnimatePageTransition type="page" title={title}>
			{/* Here you can add optional children depending on the type of page */}
		</AnimatePageTransition>
	);
};

export default GettingStarted;
