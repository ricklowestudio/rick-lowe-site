import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

const components = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className="relative w-full h-96 m-10 mx-auto">
					<Image
						className="object-contain"
						src={builder.image(value).url()}
						fill
						alt={value?.alt}
					/>
				</div>
			);
		},
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className="mt-lg list-decimal space-y-5">{children}</ol>
		),
	},
	block: {
		normal: ({ children }: any) => <p className="mb-3 leading-6">{children}</p>,
		h1: ({ children }: any) => (
			<h1 className="text-5xl py-10 font-bold">{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className="text-4xl py-10 font-bold">{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className="text-3xl py-10 font-bold">{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className="text-2xl py-10 font-bold">{children}</h4>
		),
		blockquote: ({ children }: any) => (
			<blockquote className="border-l-black border-l-4 pl-5 py-5 my-5">
				{children}
			</blockquote>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value?.href?.startsWith("/")
				? "noopener noreferrer"
				: undefined;
			return (
				<Link
					href={value?.href}
					rel={rel}
					className="underline text-[#af0705] decoration-[#af0705] hover:decoration-black"
				>
					{children}
				</Link>
			);
		},
	},
};

export default function BlockContent({ value }: any) {
	return <PortableText value={value} components={components} />;
}
