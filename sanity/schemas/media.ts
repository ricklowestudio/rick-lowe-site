import { defineType, defineField, defineArrayMember } from "sanity";

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
		}),
		defineField({
			name: "media",
			title: "Media",
			type: "blockContent",
		}),
		defineField({
			name: "embedVideo",
			title: "Embed Video",
			type: "url",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "mediaType",
		},
	},
});