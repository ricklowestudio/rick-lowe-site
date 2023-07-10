import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import timeline from "./schemas/timeline";
import about from "./schemas/about";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [about, timeline, blockContent],
};
