"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Paintings from "./";
import { paintingsQuery } from "@/sanity/lib/queries";

export default function PreviewPaintings({
	paintings = [],
}: {
	paintings: SanityDocument[];
}) {
	const [data] = useLiveQuery(paintings, paintingsQuery);

	return <Paintings paintings={data} />;
}
