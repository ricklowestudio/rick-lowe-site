import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#af0707] flex items-center">
					<ArrowUturnLeftIcon className=" text=[#af0707] h-6 w-6 mr-2" />
					Go to the Website
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
