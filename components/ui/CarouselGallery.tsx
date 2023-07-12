"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageComponent from "./Image";

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
					<ImageComponent key={image._key} value={image} />
				))}
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
