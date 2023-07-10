import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import imageGallery from "./schemas/imageGallery";
import videoEmbed from "./schemas/videoEmbed";

import timeline from "./schemas/timeline";
import about from "./schemas/about";
import project from "./schemas/project";
import paintings from "./schemas/paintings";
import media from "./schemas/media";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		about,
		timeline,
		project,
		paintings,
		media,
		blockContent,
		imageGallery,
		videoEmbed,
	],
};
