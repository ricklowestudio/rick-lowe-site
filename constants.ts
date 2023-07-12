import { Metadata } from "next";

export const navigation: Navigation[] = [
	{
		name: "About",
		href: "/",
	},
	{
		name: "Timeline",
		href: "/timeline",
	},

	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Paintings",
		href: "/paintings",
	},
	{
		name: "Media",
		href: "/media",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export const studioMeta: Metadata = {
	title: "Rick Lowe - Content Studio",
	description: "The content studio for Rick Lowe's official website.",
};

export const homeMeta: Metadata = {
	title: "Rick Lowe - Official Website",
	description:
		"Lowe is a distinguished artist whose remarkable achievements in the art world are mirrored by his championship of people and communities through social and community engaged art projects, as evidenced, in particular, through Houston’s noteworthy Project Row Houses. Founded in 1993 by Lowe, Project Row Houses is an arts and cultural community located in Houston’s significant, historical Third Ward – one of the city’s oldest African American neighbourhoods. Much of Lowe’s interest and adept skill with collaboration comes from his family upbringing, where he was surrounded by a large family of four brothers and seven sisters. This sense of familial community is closely mirrored in many of his projects that focuses on building and nurturing relationships.",
	creator: "Gideon Ibemere, Jr.",
	openGraph: {
		type: "website",
		title: "Rick Lowe - Official Website",
		description:
			"Lowe is a distinguished artist whose remarkable achievements in the art world are mirrored by his championship of people and communities through social and community engaged art projects, as evidenced, in particular, through Houston’s noteworthy Project Row Houses. Founded in 1993 by Lowe, Project Row Houses is an arts and cultural community located in Houston’s significant, historical Third Ward – one of the city’s oldest African American neighbourhoods. Much of Lowe’s interest and adept skill with collaboration comes from his family upbringing, where he was surrounded by a large family of four brothers and seven sisters. This sense of familial community is closely mirrored in many of his projects that focuses on building and nurturing relationships.",
		url: "https://www.ricklowe.com",
		siteName: "Rick Lowe",
		images: [
			{
				url: "https://www.ricklowe.com/images/og-image.png",
				width: 800,
				height: 600,
				alt: "Rick Lowe",
			},
		],
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rick Lowe - Official Website",
		description:
			"Lowe is a distinguished artist whose remarkable achievements in the art world are mirrored by his championship of people and communities through social and community engaged art projects, as evidenced, in particular, through Houston’s noteworthy Project Row Houses. Founded in 1993 by Lowe, Project Row Houses is an arts and cultural community located in Houston’s significant, historical Third Ward – one of the city’s oldest African American neighbourhoods. Much of Lowe’s interest and adept skill with collaboration comes from his family upbringing, where he was surrounded by a large family of four brothers and seven sisters. This sense of familial community is closely mirrored in many of his projects that focuses on building and nurturing relationships.",
		images: {
			url: "https://www.ricklowe.com/images/og-image.png",
			alt: "Rick Lowe",
		},
	},
};
