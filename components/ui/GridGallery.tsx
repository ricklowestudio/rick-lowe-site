import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import ImageComponent from "./Image";

const builder = imageUrlBuilder(client);

function GridGallery({ value: { images } }: { value: ImageGallery }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-3">
			{images.map((image) => (
				<ImageComponent key={image._key} value={image} />
			))}
		</div>
	);
}

export default GridGallery;
