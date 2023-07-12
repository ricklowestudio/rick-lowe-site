"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactFormWrapper from "./ContactFormWrapper";

function Contact() {
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6Ld8WhcnAAAAALGlphaMtAOkOFv9XDbaa8Rqj8rm">
			<ContactFormWrapper />
		</GoogleReCaptchaProvider>
	);
}

export default Contact;
