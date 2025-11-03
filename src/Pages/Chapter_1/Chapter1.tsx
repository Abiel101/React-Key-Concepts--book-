import AnimatePageTransition from "../../Components/AnimatePageTransition.js";

interface chapterProps {
	title: string, 
}

const Chapter1 = ({title}: chapterProps) => {
	return (
		<AnimatePageTransition type="page" title={title}>

		</AnimatePageTransition>
	);
};

export default Chapter1;
