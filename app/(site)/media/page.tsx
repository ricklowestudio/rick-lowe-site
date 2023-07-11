import Media from "@/components/Media";
import PreviewMedia from "@/components/Media/PreviewMedia";
import { draftMode } from "next/headers";

import { getCachedClient } from "@/sanity/lib/getClient";

import { cachedClient } from "@/sanity/lib/client";
import { mediaQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const media = await cachedClient(mediaQuery);

	return <Media media={media} />;
}
