"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function CarouselComponent({ value: { images } }: { value: ImageGallery }) {
	return (
		<div className="mb-3">
			<Carousel
				infiniteLoop={true}
				autoPlay={true}
				swipeable={true}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
			>
				{images.map((image) => (
					<div key={image._key} className="relative w-full h-[56rem]">
						<Image
							className="object-contain"
							src={builder.image(image).url()}
							alt={image?.alt || `Carousel Image ${image._key}`}
							sizes="100vw"
							fill
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
