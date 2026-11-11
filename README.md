# Pixabay Image Search

A vanilla JavaScript application that searches the Pixabay API and displays matching photos in a responsive gallery.

## Features

- Search for images by keyword
- Retrieve image data from the Pixabay REST API using Axios
- Display image previews and metadata such as likes, views, comments, and downloads
- Open full-size images in a SimpleLightbox gallery
- Show a loading indicator while a request is running
- Display notifications for empty queries, failed requests, and searches without results

## Technologies

- HTML5 and CSS3
- Vanilla JavaScript (ES Modules)
- Axios
- Pixabay API
- SimpleLightbox
- iziToast
- Vite

## Run locally

```bash
npm install
```

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Add your Pixabay API key to `.env`:

```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key_here
```

Then start the development server:

```bash
npm run dev
```

Use `npm run build` to create a production build.

## API configuration and security

The application reads the key from `import.meta.env.VITE_PIXABAY_API_KEY`. The local `.env` file is ignored by Git; `.env.example` documents the required variable without containing a real credential.

**Security note:** Vite variables prefixed with `VITE_` are included in client-side code and are visible to users in the browser. This setup prevents accidentally committing the key in source files, but it does not make the key secret in a deployed frontend. Revoke any key that has previously been exposed in a public repository.

## Learning focus

HTTP requests, REST APIs, asynchronous JavaScript, rendering data-driven markup, DOM updates, loading states, and error handling.
