import type { SanityDocument } from "@sanity/client";
import { BlockContent, ImageComponent } from "@/components";

export default function Projects({
	projects = [],
}: {
	projects: SanityDocument[];
}) {
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y divide-black my-20">
			{projects.map((project) => (
				<div key={project._id} className="py-5">
					<h2 className="text-2xl font-bold my-3">{project.title}</h2>
					{project?.image ? <ImageComponent value={project?.image} /> : null}
					{project?.description ? (
						<BlockContent value={project?.description} />
					) : null}
				</div>
			))}
		</main>
	);
}
