import { defineField, defineType } from "sanity";

export default defineType({
	name: "paintings",
	title: "Paintings Page",
	type: "document",
	fields: [
		defineField({
			name: "featuredImage",
			title: "Featured Image",
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
		defineField({
			name: "featuredDescription",
			title: "Featured Description",
			type: "blockContent",
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "artistStatement",
			title: "Artist Statement",
			type: "blockContent",
		}),
		defineField({
			name: "image_1",
			title: "Image 1",
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
		defineField({
			name: "image_2",
			title: "Image 2",
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
			media: "featuredImage",
		},
	},
});
