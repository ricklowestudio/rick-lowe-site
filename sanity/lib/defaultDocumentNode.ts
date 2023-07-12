// ./nextjs-app/sanity/desk/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import { navigation } from "@/constants";

const defaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
) => {
	const renderIframe = (schemaTypeVar: string) => {
		// * If the schemaTypeVar is equal to project, then we want to render the iframe with the pluralized version, because the route is actually /projects
		if (schemaTypeVar === navigation[2].value) {
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url:
							process.env.NODE_ENV === "development"
								? `http://localhost:3000/api/preview?view=${schemaTypeVar}s`
								: `https://www.ricklowe.com/api/preview?view=${schemaTypeVar}s`,
					})
					.title("Preview"),
			]);
		} else if (schemaTypeVar === navigation[0].value) {
			// * If the schemaTypeVar is equal to about, then we want to render the iframe without any ?view=, because the route is actually /
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url:
							process.env.NODE_ENV === "development"
								? `http://localhost:3000/api/preview`
								: `https://www.ricklowe.com/api/preview`,
					})
					.title("Preview"),
			]);
		} else {
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url:
							process.env.NODE_ENV === "development"
								? `http://localhost:3000/api/preview?view=${schemaTypeVar}`
								: `https://www.ricklowe.com/api/preview?view=${schemaTypeVar}`,
					})
					.title("Preview"),
			]);
		}
	};

	switch (schemaType) {
		case navigation[0].value:
		case navigation[1].value:
		case navigation[2].value:
		case navigation[3].value:
		case navigation[4].value:
			return renderIframe(schemaType);
		default:
			return S.document().views([S.view.form()]);
	}
};

export default defaultDocumentNode;
