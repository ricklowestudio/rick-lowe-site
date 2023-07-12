import { defineType, defineArrayMember, defineField } from "sanity";

export default defineType({
	name: "imageGallery",
	title: "Image Gallery",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
					type: "image",
					name: "image",
					title: "Image",
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
					],
				},
			],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			name: "display",
			title: "Display as",
			type: "string",
			description: "How should we display the images?",
			options: {
				list: [
					{ title: "Grid", value: "grid" },
					{ title: "Carousel", value: "carousel" },
				],
				layout: "radio",
			},
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
		prepare(selection) {
			return {
				title: selection.title || "Image Gallery",
				media: selection.media,
			};
		},
	},
});
