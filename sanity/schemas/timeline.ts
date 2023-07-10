import { defineType, defineField } from "sanity";

export default defineType({
	name: "timeline",
	title: "Timeline",
	type: "document",
	fields: [
		defineField({
			name: "startPeriod",
			title: "Start Period",
			type: "string",
		}),
		defineField({
			name: "endPeriod",
			title: "End Period",
			type: "string",
		}),
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
