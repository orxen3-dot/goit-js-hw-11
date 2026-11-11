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
npm run dev
```

Use `npm run build` to create a production build.

## API configuration

The current implementation reads the Pixabay API key from `src/js/pixabay-api.js`. Replace it with your own key before running the project. Do not publish personal credentials in a public repository. A key bundled into a browser application is visible to users, even when supplied through a Vite environment variable.

## Learning focus

HTTP requests, REST APIs, asynchronous JavaScript, rendering data-driven markup, DOM updates, loading states, and error handling.
