import type { SanityDocument } from "@sanity/client";
import Image from "next/image";


import BlockContent from "../BlockContent";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function About({ about = [] }: { about: SanityDocument[] }) {
	return (
		<main className="py-9 container mx-auto grid grid-cols-1 md:grid-cols-2">
			{about?.[0]?.image ? (
				<Image
					className="mb-5 md:mb-0 md:order-last"
					src={builder.image(about?.[0]?.image).width(636).height(795).url()}
					width={636}
					height={795}
					alt={about?.[0]?.image?.alt}
				/>
			) : null}
			<div className="md:mr-6">
				{about?.[0]?.description ? (
					<BlockContent value={about?.[0]?.description} />
				) : null}
			</div>
		</main>
	);
}

export default About;
