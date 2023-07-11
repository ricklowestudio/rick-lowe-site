import { draftMode } from "next/headers";

import Timeline from "@/components/Timeline";
import PreviewTimeline from "@/components/Timeline/PreviewTimeline";

import { getCachedClient } from "@/sanity/lib/getClient";

import { cachedClient } from "@/sanity/lib/client";
import { timelineQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const timeline = await cachedClient(timelineQuery);

	return <Timeline timeline={timeline} />;
}
