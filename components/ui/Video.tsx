"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoPlayer({ value: { url } }: { value: VideoEmbed }) {
	const [hasWindow, setHasWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	return <>{hasWindow && <ReactPlayer url={url} controls />}</>;
}

export default VideoPlayer;
