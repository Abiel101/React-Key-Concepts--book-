import AnimatePageTransition from "../../Components/AnimatePageTransition.js";

interface chapterProps {
	title: string;
}

/*
Here place all the chapter breakdown and make component section that I can use to be able to pass in that data I 
need like for example create a "Text + Image" section or just a "text section". Then make a code section that I 
can then pass in and then write up the code. 
Then for each chapter or section I can write all the information I need to pass in as a text and pass it through
as props to these separate components so that everything look the same and I don't have to copy and past a lot 
of code.
*/

const Chapter4 = ({ title }: chapterProps) => {
	return (
		<AnimatePageTransition type="page" title={title}>
			<div className="w-full h-screen bg-foreground flex flex-col items-center justify-center text-secondary-foreground">
				<p>
					Here goes the content we are going to split it into smaller components
				</p>
				<ul>
					<ol>
						Heading Component - for having the same type of heading and passing
						the correct data
					</ol>
					<ol>
						Main Section and tabs component together to be able to decide how
						many tabs and how th emain section will always end up looking the
						same accorss all pages.
					</ol>
				</ul>
			</div>
		</AnimatePageTransition>
	);
};

export default Chapter4;
