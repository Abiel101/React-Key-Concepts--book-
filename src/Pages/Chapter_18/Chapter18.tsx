import AnimatePageTransition from "../../Components/AnimatePageTransition.js";

interface chapterProps {
	title: string;
}

// Here we are accepting a title prop that will be passed down from the main.tsx and then futher passed down to the "AnimationPage Transtion"(name will be changed) so that it can select the page layout I want.
const Chapter18 = ({ title }: chapterProps) => {
	return (
		<AnimatePageTransition type="page" title={title}>
			{/* Here you can add optional children depending on the type of page */}
		</AnimatePageTransition>
	);
};

export default Chapter18;