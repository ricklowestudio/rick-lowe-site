import Projects from "@/components/Projects";
import PreviewProjects from "@/components/Projects/PreviewProjects";
import { draftMode } from "next/headers";

import { getCachedClient } from "@/sanity/lib/getClient";

import { cachedClient } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const projects = await cachedClient(projectsQuery);

	return <Projects projects={projects} />;
}
