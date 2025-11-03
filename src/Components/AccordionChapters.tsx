import { Link } from "react-router-dom";
import { Button } from "./ui/button.js";
import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "./ui/accordion.js";
import { Badge } from "./ui/badge.js";
import { chapterData } from "@/listOfChapters.js";

const AccordionChapters = () => {

	return (
		<div>
			{/* Make this area bigger so that it's like drop downs of the chapters with short summariez and then reach out to the author to maybe even just read over it if he likes it! */}
			<Accordion type="single" collapsible className="w-full relative">
				{chapterData.map((chapter) => (
					<AccordionItem value={`item-${chapter.chapter}`} className="border-b relative">
						{chapter.status == "Pending" ? <Badge variant="secondary" className="absolute right-10 top-10 text-2xl z-10 bg-primary">{chapter.status.toUpperCase()}</Badge> : <Badge variant="destructive" className="absolute right-10 top-10 text-2xl z-10">{chapter.status.toUpperCase()}</Badge>}
						<AccordionTrigger disabled={chapter.status === "Pending"}
							className="rounded-none border-b text-accent hover:bg-accent-foreground px-20 flex items-center"
						>
							<h2 className="font-black text-4xl lg:text-8xl text-secondary-foreground tracking-tighter">
								{chapter.title.toUpperCase()}
							</h2>
						</AccordionTrigger>
						<AccordionContent className="px-25 py-10 bg-background">
							<div className="w-1/2">
								<h3 className="text-4xl font-black mb-5 ">
									{chapter.subTitle}
								</h3>
								<p className="text-2xl mb-6">{chapter.summary}</p>
								<Button asChild variant="secondary" size="lg">
									<Link to={chapter.chapterLink}>OPEN CHAPTER</Link>
								</Button>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default AccordionChapters;
