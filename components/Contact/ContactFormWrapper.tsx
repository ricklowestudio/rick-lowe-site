"use client";
import { useEffect, useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import ContactForm from "./ContactForm";

import { verifyCaptcha, sendContactForm } from "@/lib";

const schema = yup.object({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	subject: yup.string().required("Subject is required"),
	email: yup.string().email().required("Email is required"),
	phoneNumber: yup.string(),
	message: yup.string().required("Message is required"),
});

export default function ContactFormWrapper() {
	const [isVerified, setIsVerified] = useState(false);

	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleReCaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			return;
		}

		const token = await executeRecaptcha("contact_form");

		if (token) {
			const response = await verifyCaptcha({ token });

			if (response.success) {
				setIsVerified(true);
			} else {
				setIsVerified(false);
			}
		}
	}, [executeRecaptcha]);

	useEffect(() => {
		handleReCaptchaVerify();
	}, [handleReCaptchaVerify]);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	const onSubmit = useCallback(
		async (data: any) => {
			if (!isVerified) {
				// TODO: Add toast message to refresh page or something
				console.log("Please verify captcha");
				toast.warn("Please verify captcha");
			} else {
				try {
					const response: any = await sendContactForm(data);

					if (response?.success === true) {
						toast.success("Message sent successfully");
					} else {
						toast.error(
							"Something went wrong, please try refreshing the page and starting over."
						);
					}
				} catch (error) {
					toast.error(
						"Something went wrong, please try refreshing the page and starting over."
					);
					console.error(error);
				} finally {
				}
			}
		},
		[isVerified]
	);

	return (
		<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Contact the studio
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Fill out the form below and someone from the studio will get back to
					you as soon as possible.
				</p>
			</div>
			<ContactForm
				handleSubmit={handleSubmit}
				register={register}
				errors={errors}
				isDirty={isDirty}
				isValid={isValid}
				isSubmitting={isSubmitting}
				onSubmit={onSubmit}
			/>
		</div>
	);
}
