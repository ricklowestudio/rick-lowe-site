"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Timeline from "./";
import { timelineQuery } from "@/sanity/lib/queries";

export default function PreviewTimeline({
	timeline = [],
}: {
	timeline: SanityDocument[];
}) {
	const [data] = useLiveQuery(timeline, timelineQuery);

	return <Timeline timeline={data} />;
}
