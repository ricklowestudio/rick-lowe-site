import Paintings from "@/components/Paintings";
import PreviewPaintings from "@/components/Paintings/PreviewPaintings";
import { draftMode } from "next/headers";

import { getCachedClient } from "@/sanity/lib/getClient";

import { cachedClient } from "@/sanity/lib/client";
import { paintingsQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const paintings = await cachedClient(paintingsQuery);
	console.log(paintings);

	return <Paintings paintings={paintings} />;
}
