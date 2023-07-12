import type { SanityDocument } from "@sanity/client";
import { BlockContent, ImageComponent } from "@/components";

function Paintings({ paintings = [] }: { paintings: SanityDocument[] }) {
	return (
		<main className="container mx-auto my-20">
			<div className="grid grid-cols-1 md:grid-cols-2 pb-9 ">
				{paintings?.[0]?.featuredImage ? (
					<div className="mr-5">
						<ImageComponent value={paintings?.[0]?.featuredImage} />
					</div>
				) : null}

				{paintings?.[0]?.featuredDescription ? (
					<div className="mr-5">
						<BlockContent value={paintings?.[0]?.featuredDescription} />
					</div>
				) : null}
			</div>
			<hr />
			<div className="mt-9">
				<h2 className="text-3xl font-bold mb-5">{paintings?.[0]?.title}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 ">
					<div className="md:mr-9">
						{paintings?.[0]?.artistStatement ? (
							<BlockContent value={paintings?.[0]?.artistStatement} />
						) : null}
					</div>
					<div>
						{paintings?.[0]?.image_1 ? (
							<ImageComponent value={paintings?.[0]?.image_1} />
						) : null}
						{paintings?.[0]?.image_2 ? (
							<ImageComponent value={paintings?.[0]?.image_2} />
						) : null}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Paintings;
