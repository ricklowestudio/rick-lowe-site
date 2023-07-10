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
			name: "description",
			title: "Description",
			type: "blockContent",
		}),
		defineField({
			name: "videoEmbed",
			title: "Video Embed",
			type: "videoEmbed",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
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
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
	},
});
