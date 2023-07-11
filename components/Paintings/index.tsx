import type { SanityDocument } from "@sanity/client";
import Image from "next/image";

import { BlockContent } from "@/components";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function Paintings({ paintings = [] }: { paintings: SanityDocument[] }) {
	return (
		<main className="py-9 container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 pb-9 ">
				{paintings?.[0]?.featuredImage ? (
					<div className="mr-5">
						<Image
							className="mb-5 md:mb-0 md:order-last"
							src={builder
								.image(paintings?.[0]?.featuredImage)
								.width(636)
								.height(530)
								.url()}
							width={636}
							height={530}
							alt={paintings?.[0]?.featuredImage?.alt}
						/>
					</div>
				) : null}

				{paintings?.[0]?.featuredDescription ? (
					<div className="mr-5">
						<BlockContent value={paintings?.[0]?.featuredDescription} />
					</div>
				) : null}
			</div>
			<hr />
			<div className="mt-9">
				<h2 className="text-3xl font-bold mb-5">{paintings?.[0]?.title}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 ">
					<div className="md:mr-9">
						{paintings?.[0]?.artistStatement ? (
							<BlockContent value={paintings?.[0]?.artistStatement} />
						) : null}
					</div>
					<div>
						{paintings?.[0]?.image_1 ? (
							<Image
								className="mb-5 md:order-last"
								src={builder
									.image(paintings?.[0]?.image_1)
									.width(636)
									.height(795)
									.url()}
								width={636}
								height={795}
								alt={paintings?.[0]?.image_1?.alt}
							/>
						) : null}
						{paintings?.[0]?.image_2 ? (
							<Image
								className="mb-5 md:order-last"
								src={builder
									.image(paintings?.[0]?.image_2)
									.width(636)
									.height(795)
									.url()}
								width={636}
								height={795}
								alt={paintings?.[0]?.image_2?.alt}
							/>
						) : null}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Paintings;
