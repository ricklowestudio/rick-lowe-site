import { Inter } from "next/font/google";
import { Suspense } from "react";

import Loading from "./loading";
import { Header } from "@/components";
import ToastProvider from "@/components/ToastProvider";

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
				<ToastProvider>
					<Header />
					<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</div>
				</ToastProvider>
			</body>
		</html>
	);
}
