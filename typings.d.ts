type Navigation = {
	name: string;
	href: string;
};

type ImageGallery = {
	images: Array<Image>;
	display: string;
	_type: string;
	_key: string;
};

type Image = {
	asset: {
		_type: string;
		_key: string;
	};
	_type: string;
	_key: string;
};
