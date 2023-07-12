import { NextResponse } from "next/server";
import { nodemailerInstance } from "@/lib";

const CONTACT_MESSAGE_FIELDS: any = {
	firstName: "First Name",
	lastName: "Last Name",
	subject: "Subject",
	email: "Email",
	phoneNumber: "Phone Number",
	message: "Message",
};

const generateEmailContent = (data: ContactFormData) => {
	const text = Object.entries(data).reduce((str, [key, value]): any => {
		return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value}\n\n`);
	}, "");

	const htmlData = Object.entries(data).reduce((str, [key, value]): any => {
		return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${value}</p>`);
	}, "");

	return {
		text,
		html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><style type="text/css">body,table,td,a{-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;}@media screen and (max-width: 525px){.wrapper{width: 100% !important;max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px;padding: 20px;background-color: white;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;border-radius: 0.5rem;border: 1px solid rgba(149, 157, 165, 0.2);}.form-heading{color: #2a2a2a;font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;font-weight: 400;text-align: left;line-height: 20px;font-size: 18px;margin: 0 0 8px;padding: 0;}.form-answer{color: #2a2a2a;font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;font-weight: 300;text-align: left;line-height: 20px;font-size: 16px;margin: 0 0 24px;padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style></head><body style="margin: 0 !important; padding: 0 !important; background: #fff"><divstyle="display: none;font-size: 1px;color: #fefefe;line-height: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><tdbgcolor="#ffffff"align="center"style="padding: 10px 15px 30px 15px"class="section-padding"><tableborder="0"cellpadding="0"cellspacing="0"width="100%"style="max-width: 500px"class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"><tr><tdstyle="padding: 0 0 0 0;font-size: 16px;line-height: 25px;color: #232323;"class="padding message-content"><h2>New Contact Message</h2><div class="form-container">${htmlData}</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`,
	};
};
export async function POST(req: Request) {
	const request = await req.json();

	if (
		!request.firstName &&
		!request.lastName &&
		!request.subject &&
		!request.email &&
		!request.message
	) {
		return NextResponse.json({ error: "Bad request" });
	} else {
		try {
			await nodemailerInstance.transporter.sendMail({
				...nodemailerInstance.mailOptions,
				...generateEmailContent(request),
				subject: request.subject,
			});

			return NextResponse.json({ success: true });
		} catch (e: any) {
			return NextResponse.json({ error: e.mesage });
		}
	}

	return NextResponse.json({ error: "Bad request" });
}
