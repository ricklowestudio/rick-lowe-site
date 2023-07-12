import { draftMode } from "next/headers";

import Projects from "@/components/Projects";
import PreviewProjects from "@/components/Projects/PreviewProjects";
import PreviewProvider from "@/components/PreviewProvider";

import { getCachedClient } from "@/sanity/lib/getClient";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const projects = await getCachedClient(preview)(projectsQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewProjects projects={projects} />
			</PreviewProvider>
		);
	}

	return <Projects projects={projects} />;
}
