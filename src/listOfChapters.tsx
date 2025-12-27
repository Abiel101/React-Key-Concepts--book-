// IMPORTS (ALL CHAPTER ACTIVITY CODE & EXAMPLE CODE)

// INTERFACE
interface Topics {
	title?: string;
	text: string;
	codeSnippet?: string;
	codeSnippetType?: string;
}

interface Chapter {
	title: string;
	subTitle: string;
	summary: any;
	chapter: number;
	chapterLink: string;
	status: string;	images: [];
	topics: Topics[];
	bonus?: boolean;
	bonusTip?: string;
	chapterCode?: any;
	/*
	topics: [{title: string, text: any (because we might add custom code)}];
	//Need to add a way to be able to add as many tabs as I need for creating better chapter organization.
	codeExample: [{}]
	chapterExercise: [{}]
	*/
	render?: () => React.ReactElement; // made optional so entries can omit it
}

export const chapterData: Chapter[] = [
	{
		chapter: 0,
		chapterLink: "/chapter-0",
		status: "Working On", //This is temporary until i am able to complete the project and section for aeach topic.
		title: "Getting Started",
		subTitle: "How to Get Started Building React Apps",                     
		summary: (
			<p>
				Here are steps to getting started building a React 19 Application. Here
				I also put together some of my favorite way to build React Application
				including tools like{" "}
				<strong className="text-accent-foreground">
					Shadcn, Framer Motion, Lucide Icons and Tweakcn.
				</strong>
			</p>
		),
		images: [],
		topics: [
			{
				title: "Topic 1",
				text: "This is the frist topic for this chapter the layout has been set but i am trying to test out if the will actually work of if this is not going to be good for what i am trying to make happen.",
			},
			{
				title: "Topic 2",
				text: "This is the second topic for this chapter the layout has been set but i am trying to test out if the will actually work of if this is not going to be good for what i am trying to make happen.",
				codeSnippet: `<button onClick={() => alert("BUTTON HAS BEEN CLICKED")}>Click Me</button>`,
				codeSnippetType: 'react',
			},
			{
				title: "Topic 3",
				text: "This is the third topic for this chapter the layout has been set but i am trying to test out if the will actually work of if this is not going to be good for what i am trying to make happen.",
			},
		],
		// Here is an exmaple of how I can make the code appear.
		chapterCode: {
			'/App.js': `
import Button from "/Button.js"
export default function App () {
	return <div>
	<h1>Hi I am Abiel</h1>
	<Button/>
	</div>
};`,
			'/Button.js': `export default function Button () {
	return <button onClick={() => alert("BUTTON HAS BEEN CLICKED")}>Click Me</button>
};`
		},
		bonus: true,
		bonusTip: 'This is the bonus tips for this chapter lets add some Shadcn and other awesome things.',
	},
	{
		title: "Chapter 1",
		subTitle: "React - What and Why",
		summary: "Coming Soon",
		chapter: 1,
		chapterLink: "/chapter-1",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 2",
		subTitle: "Understadning React Components and JSX",
		summary: "Coming soon",
		chapter: 2,
		chapterLink: "/chapter-2",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 3",
		subTitle: "Components and Props",
		summary: "Coming Soon",
		chapter: 3,
		chapterLink: "/chapter-3",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 4",
		subTitle: "Working with Events and State",
		summary:
			"Here we get the chance to learn more about how to work with Events and State specifically Event listeners like onClick and onChange. State using the useState Hook!",
		chapter: 4,
		chapterLink: "/chapter-4",
		status: "Working On",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 5",
		subTitle: "Rendering Lists and Conditional Content",
		summary: "Coming Soon.",
		chapter: 5,
		chapterLink: "/chapter-5",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 6",
		subTitle: "Styling React Apps",
		summary: "Coming Soon",
		chapter: 6,
		chapterLink: "/chapter-6",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 7",
		subTitle: "Portals and Refs",
		summary: "Coming Soon",
		chapter: 7,
		chapterLink: "/chapter-7",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 8",
		subTitle: "Handling Side Effects",
		summary: "Coming Soon",
		chapter: 8,
		chapterLink: "/chapter-8",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 9",
		subTitle: "Handling User Input & Forms with Form Actions",
		summary: "Coming Soon",
		chapter: 9,
		chapterLink: "/chapter-9",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 10",
		subTitle: "Behind the Scenes of React and Optimization Opportunities",
		summary: "Coming Soon",
		chapter: 10,
		chapterLink: "/chapter-10",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 11",
		subTitle: "Working with Complex State",
		summary: "Coming Soon",
		chapter: 11,
		chapterLink: "/chapter-11",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 12",
		subTitle: "Building Custom React Hooks",
		summary: "Coming Soon",
		chapter: 12,
		chapterLink: "/chapter-12",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 13",
		subTitle: "Multipage Apps with React Router",
		summary: "Coming Soon",
		chapter: 13,
		chapterLink: "/chapter-13",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 14",
		subTitle: "Managing Data with React Router",
		summary: "Coming Soon",
		chapter: 14,
		chapterLink: "/chapter-14",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 15",
		subTitle: "Server-side Rendering & Building Fullstack Apps with Next.js",
		summary: "Coming Soon",
		chapter: 15,
		chapterLink: "/chapter-15",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 16",
		subTitle: "React Server Components & Server Actions",
		summary: "Coming Soon",
		chapter: 16,
		chapterLink: "/chapter-16",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 17",
		subTitle: "Understanding React Suspense & The use() Hook",
		summary: "Coming Soon",
		chapter: 17,
		chapterLink: "/chapter-17",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
	{
		title: "Chapter 18",
		subTitle: "Next Steps and Further Resources",
		summary: "Coming Soon",
		chapter: 18,
		chapterLink: "/chapter-18",
		status: "Pending",
		images: [],
		topics: [{ title: "", text: "" }],
	},
];
