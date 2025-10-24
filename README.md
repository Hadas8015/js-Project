// ...existing code...
# HadaSpace — Space Experience 🚀

A polished, static space-themed storefront and booking demo with a modern UI, animated menu, login/signup flows, and a simple carousel. Clean, framework-free source so you can iterate fast.

Why this repo matters ✨
- Fast, static prototype for a space storefront and booking flow.
- Clean separation: per-page CSS and small JS modules.
- Mobile-friendly layout patterns and animated UI details.

Features overview 🚀
- Animated floating radial menu (see menu.css)  
- Auth panel with animated input borders + toggle between Login / Sign Up (see login.css, SignUp.css)  
- Auto-rotating image carousel with manual prev/next controls (see home.js)  
- Static assets organized under pictures 🖼️

Technologies & tooling 🧭

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantics |
| CSS3 (Flex / Grid / Animations) | Layout, responsive behavior, visual polish |
| Vanilla JavaScript (ES6) | Carousel and simple UI interactions |
| Google Fonts (Montserrat) | Typography |
| Dev tools | VS Code, Live Server, browser devtools |

Project files (open any) 📁  
- Pages: home.html, login.html, SignUp.html, OrderTickets.html, Accessories.html, Food.html, ShoppingCart.html, setting.html  
- Styles: home.css, menu.css, login.css, SignUp.css, OrderTickets.css, Accessories.css, Food.css, ShoppingCart.css, setting.css, index.css  
- Scripts: home.js, login.js, SignUp.js  
- Assets: pictures

Important JS symbols (open file to inspect) 🔎  
- Carousel (home.js): `imageArr`, `currentIndex`, `updateImage`, `nextImage`, `prevImage`, `AstronautsWords`  
- Auth UI (login.js, duplicated in SignUp.js): `inputs`, `buttons`, `form_container`

Recommendations (small, high-impact) 🛠️
- Merge duplicate auth scripts: combine login.js and SignUp.js into one module.  
- Normalize filenames (use ASCII) in pictures to avoid cross-platform path issues.  
- Add lightweight accessibility improvements: labels, aria- attributes, and keyboard support for the menu and carousel.  
- Optimize images (responsive srcset / compressed assets) for faster loads.  
- (Optional) Add an npm dev script + esbuild/rollup for bundling/minifying before deploy.

License & contribution 📦
- Suggested: MIT — add a LICENSE file.  
- Contribute: open issues and PRs with clear descriptions.

Enjoy developing! 🚀
```