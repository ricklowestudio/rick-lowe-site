"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import About from "./";
import { aboutQuery } from "@/sanity/lib/queries";

export default function PreviewAbout({
	about = [],
}: {
	about: SanityDocument[];
}) {
	const [data] = useLiveQuery(about, aboutQuery);

	return <About about={data} />;
}
