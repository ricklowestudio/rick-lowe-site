type Navigation = {
	name: string;
	href: string;
};

type Image = {
	asset: {
		_type: string;
		_ref: string;
	};
	_type: string;
	_key: string;
	alt: string;
};

type ImageGallery = {
	images: Array<Image>;
	display: string;
	_type: string;
	_key: string;
};

type VideoEmbed = {
	url: string;
	_type: string;
	_key: string;
};

type TimelineLists = Array<TimelineItem>;

type TimelineItem = {
	startPeriod: number;
	endPeriod: number;
	title: string;
	description: Array<unknown>;
	image: Image;
	videoUrl: string;
	_type: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	_createdAt: string;
};

type VerifyResponse = {
	success: boolean;
};

type ContactFormData = {
	firstName: string;
	lastName: string;
	subject: string;
	email: string;
	phoneNumber: string;
	message: string;
};
