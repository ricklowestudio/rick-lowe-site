import { defineType, defineField } from "sanity";

export default defineType({
	name: "timeline",
	title: "Timeline Page",
	type: "document",
	fields: [
		defineField({
			name: "startPeriod",
			title: "Start Period",
			type: "number",
		}),
		defineField({
			name: "endPeriod",
			title: "End Period",
			type: "number",
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
			name: "videoUrl",
			title: "Video Embed Link",
			type: "url",
		}),
	],
	preview: {
		select: {
			title: "startPeriod",
			media: "image",
			other: "title",
		},
		prepare(selection) {
			const { title, media, other } = selection;
			return {
				title: `${title} - ${other}`,
				media,
			};
		},
	},
});
