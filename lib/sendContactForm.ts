export default async function sendContactForm(data: ContactFormData) {
	const response = await fetch("/api/contact/send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message!");
		return res.json();
	});
}
