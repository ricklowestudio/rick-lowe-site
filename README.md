<h1 align="center">
  <a href="https://www.ricklowe.com">
     Rick Lowe Site
  </a>
</h1>
<h2 align="center">Official Artist's Website</h2>

<div align="left">
<h2>Table of Contents</h2>
<details>
<summary><b>Click to expand</b></summary>

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sanity Studio](#sanity-studio)
- [API Routes](#api-routes)
- [Packages](#packages)
- [Deploy on Vercel](#deploy-on-vercel)
- [Learn More](#learn-more)

</details>
</div>

## Getting Started

This is the source code for Rick Lowe's artist website. This is a [Next.js](https://nextjs.org/) project bootstrapped with:

1. [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
2. [tailwindcss](https://tailwindcss.com/)
3. [typescript](https://www.typescriptlang.org/).

The project was created using [`pnpm`](https://pnpm.io/).

You can use any of the various package managers out there:

- [`yarn`](https://yarnpkg.com/)
- [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

First install the dependencies:

```bash
pnpm install
```

Next you'll need to clone down the `.env` file from the [Rick Lowe Vercel Project](https://vercel.com/ricklowestudio/rick-lowe-site/settings/environment-variables) and place it in the root of this project.

See the [Vercel tutorial](https://vercel.com/docs/cli/env) on cloning environment variables for more.

```bash
.
├── ...
├── .env <== HERE
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── public/
├── app/
```

Now that the environment variables are available, you run the development server and start coding:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is structured using [Next.js's recommended project structure](https://nextjs.org/docs/getting-started/project-structure). Particularly it makes use of the [App Router](https://nextjs.org/docs/app).

The project directories are as follows:

1. `app/` - contains the Next.js app
2. `public/` - contains the static assets
3. `sanity/` - contains the Sanity Studio project
4. `components/` - contains the shared components and presentational components
5. `lib/` - contains the shared utility functions
6. `.github/` - contains the GitHub `release.yml` and `pull_request_template.md` files
7. `.husky/` - contains the Husky configuration for Git hooks (pre-commit and pre-push)
8. `templates/` - contains an email template for the contact form

The miscellaneous files are as follows:

### Configurations

1. `next.config.js` - contains the Next.js configuration
2. `tsconfig.json` - contains the TypeScript configuration
3. `tailwind.config.js` - contains the Tailwind CSS configuration
4. `postcss.config.js` - contains the PostCSS configuration
5. `sanity.config.ts` - contains the Sanity Studio configuration

### Package Files

1. `pnpm-lock.yaml` - contains the pnpm lockfile
2. `package.json` - contains the project dependencies and scripts

### Project Files

1. `.env` - contains the environment variables
2. `.gitignore` - contains the files and directories to ignore
3. `constants.ts` - contains the project constants
4. `typings.d.ts` - contains the TypeScript type definitions (auto imported by Next.js)
5. `sanity.cli.ts` - contains the Sanity CLI commands

## Sanity Studio

### Studio Configuration

The Sanity Studio project is located in the `sanity/` directory. It is a [Sanity](https://www.sanity.io/) project bootstrapped with a boosted plan.

The Rick Lowe developer email has access to the studio. To access the studio locally visit [http://localhost:3000/studio](http://localhost:3000/studio).

In the `sanity.config.ts` you will see a custom configuration that sets the about page and paintings page as [singletons](https://www.sanity.io/guides/singleton-document), this stops the user from creating multiple about and paintings documents in the studio, as these are single pages that are not meant to be duplicated in any way.

You will also find a custom `<StudioNavbar />` in `components/ui/Layout/StudioNavbar.tsx` that is used to navigate between the studio and the website. The navbar is initialized in the `sanity.config.ts` file.

```ts
// sanity.config.ts
...
studio: {
  components: {
    navbar: StudioNavbar,
  }
}
...
```

### Studio Schemas

Inside the `studio/` directory you can edit the schemas for each document type as well as some content block types.

The document schemas are as follows:

1. `about.ts` - contains the schema for the about page
2. `contact.ts` - contains the schema for the contact page
3. `paintings.ts` - contains the schema for the painting page
4. `media.ts` - contains the schema for the media page
5. `project.ts` - contains the schema for the project page
6. `timeline.ts` - contains the schema for the timeline page

The content block schemas are as follows:

1. `blockContent.ts` - contains the schema for the block content (Rich Text Editor)
2. `imageGallery.ts` - contains the schema for the image gallery with options for a carousel or grid
3. `videoEmbed.ts` - contains the schema for a video link i.e YouTube or Vimeo

### Studio `lib/` Functions

Inside the `lib/` directory you will find the following functions:

1. `client.ts` - contains the Sanity client for fetching data from the Sanity API
2. `getClient.ts` - contains the function for initializing the Sanity client to fetch data from the Sanity API via preview mode or normally
3. `image.ts` - contains the function for generating the Sanity image URL
4. `queries.ts` - contains the [groq](https://www.sanity.io/docs/how-queries-work) queries for fetching data from the Sanity API

## API Routes

The in app API routes are located in the `app/api/` directory. There are also some helper functions in the `app/lib/` directory that are used by the API routes. They're pretty straight forward and are documented in the code.

### Contact API Routes

### Verifying the captcha in the contact form

`/contact/verify/route.ts` - contains the POST API route for verifying the captcha in the contact form

```bash
POST /api/contact/verify
```

Example `POST` request body:

```json
{
	"token": "<captcha-token>"
}
```

### Sending an email from the contact form

`/contact/send/route.ts` - contains the POST API route for sending an email from the contact form

```bash
POST /api/contact/send
```

Types for the request body:

```ts
type ContactForm = {
	firstName: string;
	lastName: string;
	subject: string;
	email: string;
	phoneNumber: string;
	message: string;
};
```

Example `POST` request body:

```json
{
	"firstName": "Rick",
	"lastName": "Lowe",
	"subject": "Hello",
	"email": "rick@ricklowe.studio",
	"phoneNumber": "1234567890",
	"message": "Hello, I would like to get in touch with you."
}
```

## Packages

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Below is a list of packages and links to their documentation that are used in this project.

### Development

- [`@types/react`](https://www.npmjs.com/package/@types/react) - for TypeScript type definitions for React
- [`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom) - for TypeScript type definitions for React DOM
- [`@types/nodemailer`](https://www.npmjs.com/package/@types/nodemailer) - for TypeScript type definitions for Nodemailer
- [`cz-conventional-changelog`](https://www.npmjs.com/package/cz-conventional-changelog) - for commitizen commit messages
- [`husky`](https://www.npmjs.com/package/husky) - for git hooks

### Components and UI

- [`@headlessui/react`](https://headlessui.dev/react/) - for building accessible UI components
- [`@heroicons/react`](https://heroicons.com/) - icons from the team at Tailwind CSS
- [`@tailwindcss`](https://tailwindcss.com/) - for styling the UI
- [`@tailwindcss/forms`](https://tailwindcss.com/docs/forms) - for styling form elements
- [`@portabletext/react`](https://www.npmjs.com/package/@portabletext/react) - for rendering Sanity block content
- [`react-player`](https://www.npmjs.com/package/react-player) - for rendering videos
- [`react-responsive-carousel`](https://www.npmjs.com/package/react-responsive-carousel) - for rendering image galleries
- [`react-toastify`](https://www.npmjs.com/package/react-toastify) - for displaying toast notifications

### Forms/Validation

- [`@hookform/resolvers`](https://react-hook-form.com/get-started#TypeScript) - for using TypeScript with React Hook Form
- [`react-hook-form`](https://react-hook-form.com/) - for building forms
- [`react-google-recaptcha-v3`](https://www.npmjs.com/package/react-google-recaptcha-v3) - for using Google reCAPTCHA v3
- [`yup`](https://www.npmjs.com/package/yup) - for form validation

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

You should have access to the Vercel project for this website with the developer email and/or the github account. If you don't, ask the owner of the project to add you as a collaborator.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
