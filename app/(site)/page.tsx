import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { aboutQuery } from "@/sanity/lib/queries";
import About from "@/components/About";
import PreviewAbout from "@/components/About/PreviewAbout";
import PreviewProvider from "@/components/PreviewProvider";

export default async function Home() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const about = await getCachedClient(preview)(aboutQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewAbout about={about} />
			</PreviewProvider>
		);
	}
	return <About about={about} />;
}
