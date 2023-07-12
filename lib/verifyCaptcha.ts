export default async function verifyCaptcha({
	token,
}: {
	token: string;
}): Promise<VerifyResponse> {
	const verifyResponse = await fetch("/api/contact/verify", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ token }),
	});

	return verifyResponse.json();
}
