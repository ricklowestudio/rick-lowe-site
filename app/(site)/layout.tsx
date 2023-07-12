import { Inter } from "next/font/google";
import { Suspense } from "react";
import { draftMode } from "next/headers";

import Link from "next/link";

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
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastProvider>
					{preview && preview.token && (
						<div className="fixed bottom-0 left-0 ml-6 mb-6 w-screen">
							<Link
								href="/api/exit-preview"
								className="text-white bg-[#af0707] px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block rounded-md cursor-pointer w-40 h-10"
							>
								Exit Preview Mode
							</Link>
						</div>
					)}
					<Header />
					<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</div>
				</ToastProvider>
			</body>
		</html>
	);
}
