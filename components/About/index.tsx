import type { SanityDocument } from "@sanity/client";
import { BlockContent, ImageComponent } from "@/components";

function About({ about = [] }: { about: SanityDocument[] }) {
	return (
		<main className="my-20 container mx-auto grid grid-cols-1 md:grid-cols-2">
			<div className="mb-5 md:mb-0 md:order-last">
				{about?.[0]?.image ? (
					<ImageComponent value={about?.[0]?.image} />
				) : null}
			</div>

			<div className="md:mr-6">
				{about?.[0]?.description ? (
					<BlockContent value={about?.[0]?.description} />
				) : null}
			</div>
		</main>
	);
}

export default About;
