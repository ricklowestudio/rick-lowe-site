"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoPlayer({ url }: { url: string }) {
	const [hasWindow, setHasWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	return (
		<>
			{hasWindow && (
				<div
					style={{
						position: "relative",
						paddingTop: "56.25%",
					}}
				>
					<ReactPlayer
						url={url}
						controls
						className="object-contain"
						style={{
							position: "absolute",
							top: 0,
							left: 0,
						}}
						width={"100%"}
						height={"100%"}
					/>
				</div>
			)}
		</>
	);
}

export default VideoPlayer;
