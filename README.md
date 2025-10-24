// ...existing code...
# HadaSpace — Space Experience 🚀

A polished, static space-themed storefront and booking demo with a modern UI, animated menu, login/signup flows, and a simple carousel. Clean, framework-free source so you can iterate fast.

Quick start ✅
- Open [home.html](home.html) in your browser for a quick preview.
- Recommended: run a static server (Live Server or):
  ```sh
  python -m http.server 8000


Highlights ✨

Animated floating menu and responsive header (menu.css).
Login / Sign-up panel with animated input borders and toggle buttons (login.css, SignUp.css).
Simple auto-rotating image carousel with manual controls (home.js): see imageArr, currentIndex, updateImage, nextImage, prevImage, and image element AstronautsWords.
Auth UI helpers in scripts: inputs, buttons, form_container. (Currently duplicated in SignUp.js.)
Static assets under pictures (images & icons). 🖼️
Technologies & tooling 🧭

Technology	Role
HTML5	Page structure
CSS3 (Flex/Grid & Animations)	Layout & visual polish
Vanilla JavaScript (ES6)	Interactivity (carousel, auth toggle)
Google Fonts (Montserrat)	Typography
Static assets	pictures
Dev tools	VS Code, Live Server, browser dev tools
Project files (open any) 📁

Pages:
home.html
login.html
SignUp.html
OrderTickets.html
Accessories.html
Food.html
ShoppingCart.html
setting.html
Styles:
home.css
menu.css
login.css
SignUp.css
OrderTickets.css
Accessories.css
Food.css
ShoppingCart.css
setting.css
index.css
Scripts:
home.js
login.js
SignUp.js
Misc:
README.md
pictures
Important JS symbols (open file to inspect) 🔎

Carousel (home.js): imageArr, currentIndex, updateImage, nextImage, prevImage, AstronautsWords
Auth UI (login.js, duplicated in SignUp.js): inputs, buttons, form_container
Recommended improvements 🛠️

Merge duplicate auth scripts: combine login.js and SignUp.js into one module for maintainability.
Normalize asset filenames to ASCII (avoid non-ASCII characters in pictures/) to improve portability.
Add accessibility: labels, aria- attributes, keyboard navigation for the menu and carousel.
Optimize images (compress/responsive) to improve load times.
Optional: add a minimal build step (esbuild/rollup) for production assets.
License & contribution 📦

Suggested: MIT (add LICENSE).
Contribute: open issues and PRs with clear change descriptions.
Enjoy developing! 🚀

GPT-5 mini • 1x