/**
 *
 * @param data
 * @returns a success or error response from the Contact API route.
 *
 * This function is used to send the contact form data to the Contact API route.
 */

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
