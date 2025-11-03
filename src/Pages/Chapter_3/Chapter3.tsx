import AnimatePageTransition from "../../Components/AnimatePageTransition.js";

interface chapterProps {
	title: string;
}

const Chapter3 = ({ title }: chapterProps) => {
	return (
		<AnimatePageTransition type="page" title={title}>
			{/* Here you can add optional children depending on the type of page */}
            <h2>This is chapter 2</h2>
		</AnimatePageTransition>
	);
};

export default Chapter3;