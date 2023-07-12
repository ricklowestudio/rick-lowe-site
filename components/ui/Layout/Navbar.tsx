"use client";
import Image from "next/image";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar({
	navigation,
	setMobileMenuOpen,
	currentRoute,
}: {
	currentRoute: string;
	navigation: Navigation[];
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<nav className="flex items-center justify-between pr-6" aria-label="Global">
			<Link
				href="/"
				className="hover:underline hover:text-[#af0705] hover:decoration-[#af0705]   -m-1.5 p-1.5"
			>
				<span className="sr-only">/Rick Lowe</span>
				<Image
					priority
					sizes="100vw"
					src="/images/logo.jpeg"
					alt="Rick Lowe Logo"
					width={179}
					height={42}
				/>
			</Link>
			<button
				type="button"
				className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
				onClick={() => setMobileMenuOpen(true)}
			>
				<span className="sr-only">Open main menu</span>
				<Bars3Icon className="h-6 w-6" aria-hidden="true" />
			</button>
			<div className="hidden lg:ml-12 lg:flex lg:gap-x-14 lg:items-center">
				{navigation.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={`${
							currentRoute === item.href
								? "underline text-[#af0705] decoration-[#af0705]  hover:text-black hover:decoration-black"
								: "hover:underline hover:text-[#af0705] hover:decoration-[#af0705]"
						} text-sm font-semibold leading-6 underline-offset-8`}
					>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
