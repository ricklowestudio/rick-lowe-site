"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { navigation } from "@/constants";

function Header() {
	const currentRoute = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// useEffect(() => {
	// 	if (mobileMenuOpen) {
	// 		setMobileMenuOpen(false);
	// 	}
	// }, [currentRoute]);

	return (
		<header className="inset-x-0 top-0 z-50  pb-4">
			<div className="mx-auto max-w-7xl">
				<div className="px-6 pt-6  lg:pl-8 lg:pr-0">
					<Navbar
						navigation={navigation}
						setMobileMenuOpen={setMobileMenuOpen}
						currentRoute={currentRoute}
					/>
				</div>
			</div>
			<MobileNav
				navigation={navigation}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</header>
	);
}

export default Header;
