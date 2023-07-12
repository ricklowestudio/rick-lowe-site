import Image from "next/image";
import { BlockContent, VideoPlayer } from "@/components";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function TimelineListItem({
	timelineItem: { startPeriod, endPeriod, title, description, image, videoUrl },
}: {
	timelineItem: TimelineItem;
}) {
	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			{startPeriod ? (
				<time className="mb-1 text-lg font-normal leading-none text-black">
					{startPeriod}{" "}
				</time>
			) : null}
			{endPeriod ? (
				<time className="mb-1 text-lg font-normal leading-none text-black">
					- {endPeriod}
				</time>
			) : null}

			<h3 className="text-base font-normal text-black">{title}</h3>
			<BlockContent value={description} />
			{image ? (
				<div className="relative w-full h-[36rem] m-10 mx-auto">
					<Image
						className="object-contain"
						src={builder.image(image).url()}
						fill
						alt={image?.alt || `Carousel Image ${image._key}`}
						sizes="100vw"
					/>
				</div>
			) : null}
			{videoUrl ? <VideoPlayer url={videoUrl} /> : null}
		</li>
	);
}

export default TimelineListItem;
