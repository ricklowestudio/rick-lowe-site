import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function GridGallery({ value: { images } }: { value: ImageGallery }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-3">
			{images.map((image) => (
				<div key={image._key} className="relative w-full h-96">
					<Image
						className="object-contain"
						src={builder.image(image).url()}
						fill
						alt={image?.alt || `Grid Image ${image._key}`}
					/>
				</div>
			))}
		</div>
	);
}

export default GridGallery;
