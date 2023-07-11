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
