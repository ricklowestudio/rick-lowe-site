"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactFormWrapper from "./ContactFormWrapper";

function Contact() {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_CLIENT_SIDE || ""}
		>
			<ContactFormWrapper />
		</GoogleReCaptchaProvider>
	);
}

export default Contact;
