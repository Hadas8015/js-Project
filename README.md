Collecting workspace information```markdown
# HadaSpace — Space Experience (English)

Professional, polished static site for a space-themed storefront and booking experience. The repo contains responsive pages, an animated floating menu, a login/signup UI, a simple image carousel, and placeholders for shopping and ordering flows.

Quick start
- Open [home.html](home.html) in your browser for a quick preview.
- Recommended: run a static server for best results (Live Server in VS Code or):
  ```sh
  python -m http.server 8000
  ```
  Then open http://localhost:8000/home.html

Highlights / Features
- Modern responsive layout and reusable top navigation (menu.css).
- Animated landing visuals and carousel with auto-rotate and manual controls:
  - Carousel variables and functions: `imageArr`, `currentIndex`, `updateImage`, `nextImage`, `prevImage`, and the image element `AstronautsWords`.
- Polished login / signup UX with animated input borders and form toggle:
  - Interaction hooks: `inputs`, `buttons`, `form_container`. (Note: SignUp.js currently duplicates login.js.)
- Modular CSS per page for easy theming and maintenance.
- Static-first, framework-free codebase (vanilla HTML/CSS/JS) for maximum portability and simplicity.

Technologies
- HTML5, CSS3 (grid/flex + animations)
- Vanilla JavaScript (ES6)
- Google Fonts (Montserrat)
- Static assets (images in pictures/)
- Recommended dev tools: VS Code, Live Server, browser dev tools

Project structure (open any file)
- Pages
  - home.html
  - login.html
  - SignUp.html
  - OrderTickets.html
  - Accessories.html
  - Food.html
  - ShoppingCart.html
  - setting.html
- Styles
  - home.css
  - menu.css
  - login.css
  - SignUp.css
  - OrderTickets.css
  - Accessories.css
  - Food.css
  - ShoppingCart.css
  - setting.css
  - index.css
- Scripts
  - home.js
  - login.js
  - SignUp.js
- Misc
  - README.md
  - pictures

Important JS symbols (open file to inspect)
- Carousel (see home.js):
  - `imageArr`, `currentIndex`, `updateImage`, `nextImage`, `prevImage`, `AstronautsWords`
- Login / Signup (see login.js and duplicate in SignUp.js):
  - `inputs`, `buttons`, `form_container`

Recommendations to make it more professional
- Consolidate duplicated scripts: merge login.js and SignUp.js into a single auth UI script.
- Normalize asset filenames to ASCII (avoid Hebrew characters in filenames) to improve cross-platform compatibility.
- Add basic form validation and accessibility (labels, aria- attributes) to login/signup flows.
- Minify and optimize images in pictures for faster load times.
- Add a small build step (optional): npm + a bundler (esbuild/rollup) to produce optimized assets.
- Consider adding unit / UI tests and CI for deploy previews.

Contributing
- Create issues for feature requests or bugs.
- Submit PRs with concise change descriptions.

License
- Recommended: MIT (add LICENSE file)

If you want, I can:
- Provide the merged auth script and show the exact replacement in login.js / SignUp.js.
- Convert Hebrew filenames and update references across HTML/CSS/JS.

