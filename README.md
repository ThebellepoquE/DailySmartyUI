# DailySmartyUI

This project is a React/Redux/Router UI clone, originally built for the DevCamp bootcamp, now adapted to use a public API for learning and experimentation.

## Acknowledgements

- **Jordan Hudgens** and **DevCamp Bootcamp** ([Bottega Code School](https://bottega.tech/)) for their educational resources and guidance
- **maxnerlson997** for valuable contributions and resources
- The **Open Source Community** for making this project possible through their tools and libraries

## Tech Stack

- React 16.13.1
- Redux 4
- React Router 5
- Redux Form
- Bootstrap 4
- SCSS (via `sass`)
- Webpack 4 (custom config)
- Axios (for API requests)

## API

**Note:** The original DailySmarty API is no longer available. This project now uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API for posts and search functionality.

## Developer Workflow

### Install dependencies

```
npm install
```

### Start development server

```
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Build for production

```
npm run build
```

## Troubleshooting

- If you see `EBUSY: resource busy or locked, lstat 'C:\\DumpStack.log.tmp'`, this is a Windows/webpack warning and can be ignored if the app works.
- If you see `Can't resolve 'fs'` or similar, make sure you do **not** import Node.js modules (like `express`, `fs`, `destroy`) in your React/Redux code.
- If you see dependency errors with `node-sass`, use `sass` instead (already configured).

## License

MIT

---

_This project is for educational purposes only._
