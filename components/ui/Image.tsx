"use client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "@/sanity/lib/getClient";
import { ImageLoader } from "next/image";

type ImageProps = {
	src: string;
	width: number;
	height: number;
	loader: any;
};

function ImageComponent({ value }: { value: any }) {
	const client = getClient();

	const { src, width, height, loader }: ImageProps = useNextSanityImage(
		client,
		value
	);

	return (
		<div className="my-2">
			<Image
				className="w-full h-auto"
				src={src}
				width={width}
				height={height}
				loader={loader as ImageLoader}
				alt={value?.alt || `Carousel Image ${value._key}`}
				// className="object-contain"
				sizes="(max-width: 800px) 100vw, 800px"
			/>
		</div>
	);
}

export default ImageComponent;
