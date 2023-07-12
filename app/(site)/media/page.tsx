import { draftMode } from "next/headers";

import Media from "@/components/Media";
import PreviewMedia from "@/components/Media/PreviewMedia";
import PreviewProvider from "@/components/PreviewProvider";

import { getCachedClient } from "@/sanity/lib/getClient";
import { mediaQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const media = await getCachedClient(preview)(mediaQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewMedia media={media} />
			</PreviewProvider>
		);
	}

	return <Media media={media} />;
}
