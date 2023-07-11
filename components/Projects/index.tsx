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
	const title =
		projects.length === 1 ? `1 Project` : `${projects.length} Projects`;
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
			<h1 className="text-2xl p-4 font-bold">{title}</h1>
			{projects.map((project) => (
				<div key={project._id} className="p-4">
					<h2 className="text-xl font-bold">{project.title}</h2>
          
					{project?.description ? (
						<PortableText value={project?.description} />
					) : null}
				</div>
			))}
		</main>
	);
}
