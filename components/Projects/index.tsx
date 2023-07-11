import type { SanityDocument } from "@sanity/client";

import Image from "next/image";

import { BlockContent } from "@/components";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Projects({
	projects = [],
}: {
	projects: SanityDocument[];
}) {
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y divide-black ">
			{projects.map((project) => (
				<div key={project._id} className="py-5">
					<h2 className="text-2xl font-bold my-3">{project.title}</h2>
					{project?.image ? (
						<div className="relative w-full h-max m-10 mx-auto">
							<Image
								className="object-contain"
								src={builder.image(project?.image).url()}
								fill
								alt={project?.image?.alt}
							/>
						</div>
					) : null}

					{project?.description ? (
						<BlockContent value={project?.description} />
					) : null}
				</div>
			))}
		</main>
	);
}
