/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { StudioNavbar } from "./components";
import { myTheme } from "./sanity/theme";

const singletonActions = new Set(["publish", "discardChanges", "restore	"]);

const singletonTypes = new Set(["about", "paintings"])

export default defineConfig({
	basePath: "/studio",
	name: "Rick_Lowe_Content_Studio",
	title: "Rick Lowe Content Studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool({
			structure: (S) => 
			S.list().title("Content").items([

				// singleton type has a list item with a custom child
				S.listItem().title("About").id("about").child(
					// Instead of rendering a list of documents, we render a single
					// document, specifying the `documentId` manually to ensure
					// that we're editing the single instance of the document
					S.document()
						.schemaType("about")
						.documentId("about")
				),
				S.listItem().title("Paintings").id("paintings").child(
					S.document().schemaType('paintings').documentId('paintings')
				),

				// Regular document types
				S.documentTypeListItem("author").title("Authors"),
				S.documentTypeListItem("category").title("Categories"),
				S.documentTypeListItem("post").title("Posts"),
			]),
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
	theme: myTheme,
	studio: {
		components: {
			navbar: StudioNavbar,
		},
	},
});
