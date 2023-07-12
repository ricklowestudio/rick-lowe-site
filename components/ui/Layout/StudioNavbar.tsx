import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
	return (
		<div>
			<div className="flex items-center p-5">
				<Link href="/" className="text-[#af0707] flex items-center">
					<ArrowUturnLeftIcon className=" text=[#af0707] h-6 w-6 mr-2" />
					Go to the Website
				</Link>
				<Link
					href="/api/preview"
					className="text-white bg-[#af0707] px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block rounded-md cursor-pointer ml-6"
				>
					Go to Preview Mode Website
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
