import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

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
					<h2 className="text-2xl font-bold mb-2">{project.title}</h2>

					{project?.description ? (
						<PortableText value={project?.description} />
					) : null}
				</div>
			))}
		</main>
	);
}
