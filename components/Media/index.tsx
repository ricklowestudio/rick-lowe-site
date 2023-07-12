import type { SanityDocument } from "@sanity/client";

import { BlockContent } from "@/components";

export default function Media({ media = [] }: { media: SanityDocument[] }) {
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y divide-black my-20">
			{media.map((media) => (
				<div
					key={media._id}
					className="grid grid-cols-1 md:grid-cols-2 items-center"
				>
					<div className="mr-5">
						<h2 className="text-2xl font-bold my-3">{media.title}</h2>
						{media?.description ? (
							<BlockContent value={media?.description} />
						) : null}
					</div>
					<div className="py-5">
						{media?.description ? <BlockContent value={media?.media} /> : null}
					</div>
				</div>
			))}
		</main>
	);
}
