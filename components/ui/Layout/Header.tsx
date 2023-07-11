"use client";
import { useState } from "react";

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { navigation } from "@/constants";

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="inset-x-0 top-0 z-50">
			<div className="mx-auto max-w-7xl">
				<div className="px-6 pt-6  lg:pl-8 lg:pr-0">
					<Navbar
						navigation={navigation}
						setMobileMenuOpen={setMobileMenuOpen}
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
