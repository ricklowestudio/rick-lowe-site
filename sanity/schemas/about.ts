import { defineField, defineType } from "sanity";

export default defineType({
	name: "about",
	title: "About",
	type: "document",
	fields: [
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
			],
		}),
	],
	preview: {
		select: {
			title: "description",
			media: "image",
		},
	},
});
