export default async function sendContactForm(
	data: ContactFormData
): Promise<VerifyResponse> {
	const response = await fetch("/api/contact/send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(data),
	});

	return response.json();
}
