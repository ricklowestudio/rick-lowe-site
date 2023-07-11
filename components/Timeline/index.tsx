import TimelineList from "./_components/TimelineList";

export default function Timeline({
	timeline = [],
}: {
	timeline: TimelineLists;
}) {
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y justify-items-center divide-black mt-20 lg:mt-32 mb-20">
			<TimelineList timeline={timeline} />
		</main>
	);
}
