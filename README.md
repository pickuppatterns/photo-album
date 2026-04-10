# Simple React Photo Album

A responsive photo gallery built with React and webpack, showcasing photography by Michael Elliott.

**Live Demo:** [https://friendly-paprenjak-c254ca.netlify.app](https://friendly-paprenjak-c254ca.netlify.app)

---

## Screenshots

![Photo Album Preview](./src/assets/cannonbeach2.jpg)

---

## Tech Stack

- [React 16](https://reactjs.org/) — UI component library
- [Webpack 4](https://webpack.js.org/) — Module bundler
- [Babel](https://babeljs.io/) — JavaScript transpiler
- [PostCSS](https://postcss.org/) — CSS processing with nesting support
- [Netlify](https://netlify.com/) — Hosting and continuous deployment

---

## Getting Started

### Prerequisites
- Node.js v16+ (managed via [nvm](https://github.com/nvm-sh/nvm))
- npm

### Installation

Clone the repo:
```bash
git clone git@github.com:pickuppatterns/photo-album.git
cd photo-album
```

Install dependencies:
```bash
nvm use 16
npm install
```

Start the development server:
```bash
npm start
```

Open [http://localhost:7890](http://localhost:7890) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode at localhost:7890 |
| `npm run build` | Builds the app for production to the `dist/` folder |
| `npm test` | Runs the test suite |

---

## Project Structure
---

## Deployment

This project auto-deploys to Netlify on every push to the `master` branch.

To deploy manually:
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## Author

**Michael Elliott**
- GitHub: [@pickuppatterns](https://github.com/pickuppatterns)

---

## License

ISC