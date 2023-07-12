import { draftMode } from "next/headers";

import Timeline from "@/components/Timeline";
import PreviewTimeline from "@/components/Timeline/PreviewTimeline";
import PreviewProvider from "@/components/PreviewProvider";

import { getCachedClient } from "@/sanity/lib/getClient";
import { timelineQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const timeline = await getCachedClient(preview)(timelineQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewTimeline timeline={timeline} />
			</PreviewProvider>
		);
	}

	return <Timeline timeline={timeline} />;
}
