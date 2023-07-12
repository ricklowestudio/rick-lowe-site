import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const request = await req.json();

	async function verifyCaptcha() {
		const initialResponse = await fetch(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					secret: process.env.CAPTCHA_SERVER_SIDE,
					response: request.token,
				}),
			}
		);

		const response = await initialResponse.json();

		return response;
	}

	const res = await verifyCaptcha();

	if ((res.success = true)) {
		return NextResponse.json({ success: true });
	} else {
		console.error("Captcha failed.");
		return NextResponse.error();
	}
}
