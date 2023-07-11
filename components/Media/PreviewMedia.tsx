"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Media from "./";
import { mediaQuery } from "@/sanity/lib/queries";

export default function PreviewMedia({
	media = [],
}: {
	media: SanityDocument[];
}) {
	const [data] = useLiveQuery(media, mediaQuery);

	return <Media media={data} />;
}
