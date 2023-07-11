"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Projects from "./";
import { projectsQuery } from "@/sanity/lib/queries";

export default function PreviewProjects({
	projects = [],
}: {
	projects: SanityDocument[];
}) {
	const [data] = useLiveQuery(projects, projectsQuery);

	return <Projects projects={data} />;
}
