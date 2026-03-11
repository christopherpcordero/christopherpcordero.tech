# portfolio

Christopher Cordero's personal portfolio — built with React + Vite.

## Adding your resume

Place your resume PDF at:
```
portfolio/public/resume.pdf
```
The download button in the hero will automatically link to it. Name the file exactly `resume.pdf`.

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/portfolio/`

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs the build and pushes the `/dist` folder to the `gh-pages` branch automatically.

Then in GitHub → repo Settings → Pages → set source to the `gh-pages` branch.

Live at: `https://christopherpcordero.tech/portfolio/`

## Structure

```
src/
  components/
    Nav.jsx / .module.css
    Hero.jsx / .module.css
    ThreatFeed.jsx / .module.css
    StatsBar.jsx / .module.css
    Skills.jsx / .module.css
    Experience.jsx / .module.css
    Projects.jsx / .module.css
    FieldNotes.jsx / .module.css
    Leadership.jsx / .module.css
    Credentials.jsx / .module.css
    Contact.jsx / .module.css
    Footer.jsx / .module.css
    Terminal.jsx / .module.css
    TerminalHint.jsx / .module.css
  styles/
    global.css
  App.jsx
  main.jsx
```

## Updating content

All content lives in the data arrays at the top of each component file — no need to touch the JSX structure to update text, add jobs, or add projects.
