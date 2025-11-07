import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button.js";
import { chapterData } from "@/listOfChapters.js";

const ChapterPageTemplate = () => {
	// find current chapter based on the URL
	const currentChapter = chapterData.find(
		(chapter) => chapter.chapterLink === location.pathname
	);

	return (
		<>
			<motion.div
				className="absolute w-full"
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -20 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				{currentChapter ? (
					<div className="h-screen flex flex-col items-center justify-center">
						<h1 className="thunder-bold text-9xl lg:text-[240px] text-center">
							{currentChapter.title?.toUpperCase()}
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
				) : (
					<h1>Page not found</h1>
				)}

                {/* TODO: CONTINUE HERE 11/7/25 SET UP THE TEMPLATE FOR THE DATA AND ADD CHAPTER 0, 4 SUMMARY AND DATA. */}
                {/* TODO: Add tabs for switching from chatper to chapter activity code. */}
				<div className="w-full h-screen bg-foreground flex flex-col items-center justify-center text-secondary-foreground">
					<p>{currentChapter?.summary}</p>
				</div>
			</motion.div>


            {/* =================================
            
            Add conditionon whether I use the children or if I just use the simple layout so that it can be different type of layout for specific chapters. Not sure if I am able to change it up a bit in that chapters data like make mini components or something like that.
            
            =====================================*/}

		</>
	);
};

export default ChapterPageTemplate;
