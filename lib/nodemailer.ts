import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.NODEMAILER_APP_EMAIL,
		pass: process.env.NODEMAILER_APP_PASSWORD,
	},
});

export const mailOptions = {
	from: process.env.NODEMAILER_APP_EMAIL,
	to: process.env.NODEMAILER_APP_TO_EMAIL,
};
