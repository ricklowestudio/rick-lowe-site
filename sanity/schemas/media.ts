import { defineType, defineField } from "sanity";

export default defineType({
	name: "media",
	title: "Media Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "blockContent",
			description: "Excerpt from the article/media",
		}),
		defineField({
			name: "media",
			title: "Media",
			type: "blockContent",
			description:
				"You can add links, images, a grid gallery, an image carousel, and/or a video link. The order you add them will be the order they appear on the site to the right of the description.",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "mediaType",
		},
	},
});
