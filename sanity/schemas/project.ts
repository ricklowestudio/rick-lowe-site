import { defineType, defineField } from "sanity";

export default defineType({
	name: "project",
	title: "Projects Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			description:
				"Cover image for the project, this will show first, after the title, on the site",
			options: {
				hotspot: true,
				metadata: ["lqip"],
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
				{
					name: "caption",
					type: "string",
					title: "Caption",
				},
			],
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "blockContent",
			description:
				"This is rich content, so you can add links, images, a grid gallery, an image carousel, and/or a video link. The order you add them will be the order they appear on the site.",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
	},
});
