import { draftMode } from "next/headers";

import Paintings from "@/components/Paintings";
import PreviewPaintings from "@/components/Paintings/PreviewPaintings";
import PreviewProvider from "@/components/PreviewProvider";

import { getCachedClient } from "@/sanity/lib/getClient";
import { paintingsQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const paintings = await getCachedClient(preview)(paintingsQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewPaintings paintings={paintings} />
			</PreviewProvider>
		);
	}

	return <Paintings paintings={paintings} />;
}
