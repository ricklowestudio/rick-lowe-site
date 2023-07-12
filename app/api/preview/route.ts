import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const view = searchParams.get("view");

	// Enable draft mode
	draftMode().enable();

	// Redirect to the path from the request
	view ? redirect(`/${view}`) : redirect(`/`);
}
