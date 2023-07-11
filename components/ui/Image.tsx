import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function ImageComponent({ value }: { value: any }) {
	return (
		<div className="relative w-full h-[40rem] m-10 mx-auto">
			<Image
				className="object-contain"
				src={builder.image(value).url()}
				fill
				alt={value?.alt}
			/>
		</div>
	);
}

export default ImageComponent;
