import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button.js";
import { chapterData } from "@/listOfChapters.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "./ui/accordion";
import { Sandpack } from "@codesandbox/sandpack-react";
import { aquaBlue } from "@codesandbox/sandpack-themes";


const ChapterPageTemplate = () => {
	// find current chapter based on the URL
	const currentChapter = chapterData.find(
		(chapter) => chapter.chapterLink === location.pathname
	);

	return (
		<motion.div
			className="absolute w-full"
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			{currentChapter ? (
				<>
					<div className="h-screen flex flex-col items-center justify-center">
						<h1 className="thunder-bold text-9xl lg:text-[240px] text-center">
							{currentChapter.title.toUpperCase()}
						</h1>
						<h2 className="text-2xl lg:text-3xl text-muted-foreground mb-20">
							{currentChapter.subTitle}
						</h2>
						<Button
							variant="outline"
							asChild
							className="absolute top-20 left-2 md:left-20"
						>
							<Link to="/">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"
								>
									<path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
									<path d="M20 9v6" />
								</svg>
								Home
							</Link>
						</Button>
					</div>

					<div className="w-full h-screen bg-foreground text-secondary-foreground">
						{/*TODO:  ADD A CONDITION TO SHOW THE CONTENT AND CODE IF THERE IS ANYTHING BUT IF THERE ISNT THEN TO ONLY SHOW THE CONTENT. */}
						<Tabs
							defaultValue="chapter-content"
							className="lg:flex lg:items-center lg:justify-center p-5"
						>
							<TabsList className="bg-foreground rounded-none h-20 gap-2 p-2 w-full sm:w-1/2">
								<TabsTrigger
									value="chapter-content"
									className="bg-background/50 cursor-pointer"
								>
									Content
								</TabsTrigger>
								<TabsTrigger
									value="chapter-activity"
									className="bg-background/50 cursor-pointer"
								>
									Code Activty
								</TabsTrigger>
							</TabsList>
							<TabsContent
								value="chapter-content"
								className="max-w-7xl relative"
							>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4, ease: "easeInOut" }}
								>
									{currentChapter.topics.map((topic, index) => (
										<div key={index} className="my-10">
											<h3 className="text-4xl thunder-bold mb-2 tracking-wide">
												{topic.title}
											</h3>
											<p className="text-gray-600 dark:text-gray-400 leading-8">
												{topic.text}
											</p>
										</div>
									))}
									{currentChapter.bonus && (
										<div>
											<Accordion
												type="single"
												collapsible
												className="-bottom-10 w-full"
											>
												<AccordionItem value="bonus">
													<AccordionTrigger className="rounded-lg text-accent bg-accent-foreground px-5 md:px-20 flex items-center">
														Bonus Tip
													</AccordionTrigger>
													<AccordionContent className="rounded-lg mt-2 px-10 md:px-25 py-10 bg-background text-foreground">
														{currentChapter.bonusTip}
													</AccordionContent>
												</AccordionItem>
											</Accordion>
										</div>
									)}
								</motion.div>
							</TabsContent>

							{/* The Code Content */}
							<TabsContent
								value="chapter-activity"
								className="max-w-7xl relative"
							>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4, ease: "easeInOut" }}
									className="w-full"
								>
									{/* SUPER COOL THAT I WAS ABLE TO MAKE THIS ACTUALLY WORK!!! MIGHT DIVID INTO A SEPRATE COMPONENT TO MAKE IT EASIER TO CHANGE OVER TIME. for this I would need to pass in the current chapter as a prop. */}
									<Sandpack
										template="react"
										theme={aquaBlue}
										files={currentChapter.chapterCode}
										options={{
											showLineNumbers: true, // default - true
											showInlineErrors: true, // default - false
											wrapContent: true, // default - false
											editorHeight: 400, // default - 300
											editorWidthPercentage: 50, // default - 50
										}}
									/>
								</motion.div>
							</TabsContent>
						</Tabs>
					</div>
				</>
			) : (
				<h1>Page not found</h1>
			)}

			{/* =================================
            
            Add conditionon whether I use the children or if I just use the simple layout so that it can be different type of layout for specific chapters. Not sure if I am able to change it up a bit in that chapters data like make mini components or something like that.
            
            =====================================*/}
		</motion.div>
	);
};

export default ChapterPageTemplate;
