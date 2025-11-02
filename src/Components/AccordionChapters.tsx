import { Link } from "react-router-dom";
import { Button } from "./ui/button.js";
import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "./ui/accordion.js";
import { useState } from "react";

const chapterData = [
	{
		title: "Chapter 1",
		subTitle: "Introduction to React",
		summary:
			"Get started with the basics of React including components, JSX, and props.",
		chapter: 1,
		chapterLink: "/chapter-1-introduction-to-react",
	},
	{
		title: "Chapter 2",
		subTitle: "Learning more on React",
		summary:
			"Here is another summuary for chapter 2 to see how this looks like in the accordion component.",
		chapter: 2,
		chapterLink: "/chapter-2-introduction-to-react",
	},
];
const AccordionChapters = () => {
	const [background, setBackground] = useState("");

	//TODO: Move this to be a separte component to be able to manage the separate change in the background color or see if you are able to manage it on it's own here.

	// function handleBackgroundChange() {
	//     // Logic to change background based on chapter title
	//     if (background === '') {
	//         setBackground('oklch(0.6832 0.1769 246.9929)');
	//         return;
	//     }   else{
	//         setBackground('');
	//         return;
	//     }
	// }

	return (
		<div>
			{/* Make this area bigger so that it's like drop downs of the chapters with short summariez and then reach out to the author to maybe even just read over it if he likes it! */}
			<Accordion type="single" collapsible className="w-full">
				{chapterData.map((chapter) => (
					<AccordionItem value={`item-${chapter.chapter}`} className="border-b">
						<AccordionTrigger
							className="rounded-none border-b text-accent hover:bg-accent-foreground px-20 flex items-center"
							style={{ backgroundColor: background }}
						>
							<h2 className="font-black text-4xl lg:text-8xl text-secondary-foreground tracking-tighter">
								{chapter.title.toUpperCase()}
							</h2>
						</AccordionTrigger>
						<AccordionContent className="px-25 py-10 bg-background">
							<h3 className="text-4xl font-black mb-5">{chapter.subTitle}</h3>
							<p className="text-2xl mb-6">{chapter.summary}</p>
							<Button asChild variant="secondary" size="lg">
								<Link to="/events">OPEN CHAPTER</Link>
							</Button>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default AccordionChapters;
