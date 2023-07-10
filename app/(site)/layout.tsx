import { Nunito } from "next/font/google";

import { Header } from "@/components";
import { homeMeta } from "@/constants";

import "../../styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

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
			<body className={nunito.className}>
				<Header />
				<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">{children}</div>
			</body>
		</html>
	);
}
