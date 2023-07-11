import TimelineListItem from "./TimelineListItem";

function TimelineList({ timeline }: { timeline: TimelineLists }) {
	return (
		<ol className="relative border-l border-black max-w-2xl">
			{timeline.map((timelineItem) => (
				<TimelineListItem key={timelineItem._id} timelineItem={timelineItem} />
			))}
		</ol>
	);
}

export default TimelineList;
