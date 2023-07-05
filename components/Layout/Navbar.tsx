import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar({
	navigation,
	setMobileMenuOpen,
}: {
	navigation: Navigation[];
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<nav className="flex items-center justify-between pr-6" aria-label="Global">
			<a href="#" className="-m-1.5 p-1.5">
				<span className="sr-only">/Rick Lowe</span>
				<Image
					src="/images/logo.jpeg"
					alt="Rick Lowe Logo"
					width={179}
					height={42}
				/>
			</a>
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
					<a
						key={item.name}
						href={item.href}
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						{item.name}
					</a>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
