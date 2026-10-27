# FORTUNA GmbH website — organized version

React + Vite project rebuilt with separate components, translations, image settings and CSS modules.

## Structure
- `src/App.jsx`: assembles sections and handles shared language state
- `src/components/`: one file per site section (header, hero, services, about, projects, contact, footer, logo)
- `src/data/translations.js`: all copy in German, French, Italian and Albanian
- `src/data/images.js`: image URLs in one place
- `src/styles/`: styles split by section and responsive breakpoints
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy

## Local development
Install Node.js 20+, then run `npm install` and `npm run dev`.

## Build test
Run `npm run build`; run `npm run preview` to preview the production build.

## Publish to a new repository
1. Create an empty GitHub repository with branch `main`.
2. Upload the *contents* of this folder to the repository root (not the outer folder).
3. In repository Settings → Pages, set Source to GitHub Actions.
4. In Actions, wait for the deployment workflow to finish.

`vite.config.js` uses `base: './'` so the project can be hosted under a repository path without hardcoding the old repository name.

## Where to edit
- Text and translations: `src/data/translations.js`
- Photos: `src/data/images.js`
- Section structure/functionality: matching component in `src/components/`
- Design: matching CSS file in `src/styles/`

## Contact form
GitHub Pages only hosts static files. The form therefore opens a prefilled email draft with `mailto:` rather than posting to a Node backend. Confirm the actual company email and phone number in `src/components/Contact.jsx` before publishing. Contact details currently remain placeholders from the earlier website concept.
