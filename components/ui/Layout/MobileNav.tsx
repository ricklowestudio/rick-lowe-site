"use client";

import Image from "next/image";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function MobileNav({
	navigation,
	mobileMenuOpen,
	setMobileMenuOpen,
}: {
	navigation: Navigation[];
	mobileMenuOpen: boolean;
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Dialog
			as="div"
			className="lg:hidden"
			open={mobileMenuOpen}
			onClose={() => setMobileMenuOpen(false)}
		>
			<div className="fixed inset-0 z-50" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						onClick={() => setMobileMenuOpen(false)}
						className="hover:underline hover:text-[#af0705] hover:decoration-[#af0705] -m-1.5 p-1.5"
					>
						<span className="sr-only">Rick Lowe</span>
						<Image
							priority
							sizes="100vw"
							className="h-8 w-auto"
							src="/images/logo.jpeg"
							alt="Rick Lowe Logo"
							width={179}
							height={42}
						/>
					</Link>
					<button
						type="button"
						className="-m-2.5 rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="space-y-2 py-6">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:underline hover:text-[#af0705] hover:decoration-[#af0705]"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}

export default MobileNav;
