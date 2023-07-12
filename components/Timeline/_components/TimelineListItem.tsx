import { BlockContent, VideoPlayer, ImageComponent } from "@/components";

function TimelineListItem({
	timelineItem: { startPeriod, endPeriod, title, description, image, videoUrl },
}: {
	timelineItem: TimelineItem;
}) {
	return (
		<li className="mb-12 ml-4 px-6 py-3">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			{startPeriod ? (
				<time className="mb-1 text-lg font-bold leading-none text-black">
					{startPeriod}{" "}
				</time>
			) : null}
			{endPeriod ? (
				<time className="mb-1 text-lg font-bold leading-none text-black">
					- {endPeriod}
				</time>
			) : null}
			{image ? <ImageComponent value={image} /> : null}

			<h3 className="text-lg font-normal text-black">{title}</h3>
			<BlockContent value={description} />

			{videoUrl ? <VideoPlayer url={videoUrl} /> : null}
		</li>
	);
}

export default TimelineListItem;
