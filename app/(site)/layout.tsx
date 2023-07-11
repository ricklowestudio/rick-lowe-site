import { Inter } from "next/font/google";

import { Header } from "@/components";
import { homeMeta } from "@/constants";

import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	...homeMeta,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">{children}</div>
			</body>
		</html>
	);
}
