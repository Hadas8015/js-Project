// ...existing code...
# HadaSpace — Space Experience 🚀

A polished, static space-themed storefront and booking demo with a modern UI, animated menu, login/signup flows, and a simple carousel. Clean, framework-free source so you can iterate fast.

Quick start ✅
- Open [home.html](home.html) in your browser for a quick preview.
- Recommended: run a static server (Live Server or):
  ```sh
  python -m http.server 8000

  Collecting workspace information```markdown
# HadaSpace — Space Experience 🚀

A polished, static space-themed storefront and booking demo with a modern UI, animated menu, login/signup flows, and a simple carousel. Framework-free (vanilla HTML/CSS/JS) so it's easy to iterate and publish.

Quick start ✅
- Open [home.html](home.html) in your browser for a quick preview.
- Recommended: run a static server (Live Server in VS Code or):
  ```sh
  python -m http.server 8000
  ```
  then open http://localhost:8000/home.html

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

Links to referenced symbols and files in your workspace:
- [`imageArr`](home.js) — [home.js](home.js)  
- [`currentIndex`](home.js) — [home.js](home.js)  
- [`updateImage`](home.js) — [home.js](home.js)  
- [`nextImage`](home.js) — [home.js](home.js)  
- [`prevImage`](home.js) — [home.js](home.js)  
- [`AstronautsWords`](home.js) — [home.js](home.js)  
- [`inputs`](login.js) — [login.js](login.js)  
- [`buttons`](login.js) — [login.js](login.js)  
- [`form_container`](login.js) — [login.js](login.js)

All workspace files (click to open):
- [Accessories.css](Accessories.css) | [Accessories.html](Accessories.html)
- [Food.css](Food.css) | [Food.html](Food.html)
- [home.css](home.css) | [home.html](home.html) | [home.js](home.js)
- [index.css](index.css)
- [login.css](login.css) | [login.html](login.html) | [login.js](login.js)
- [menu.css](menu.css)
- [OrderTickets.css](OrderTickets.css) | [OrderTickets.html](OrderTickets.html)
- [README.md](README.md)
- [setting.css](setting.css) | [setting.html](setting.html)
- [ShoppingCart.css](ShoppingCart.css) | [ShoppingCart.html](ShoppingCart.html)
- [SignUp.css](SignUp.css) | [SignUp.html](SignUp.html) | [SignUp.js](SignUp.js)
- [pictures/](pictures/)
Links to referenced symbols and files in your workspace:
- [`imageArr`](home.js) — [home.js](home.js)  
- [`currentIndex`](home.js) — [home.js](home.js)  
- [`updateImage`](home.js) — [home.js](home.js)  
- [`nextImage`](home.js) — [home.js](home.js)  
- [`prevImage`](home.js) — [home.js](home.js)  
- [`AstronautsWords`](home.js) — [home.js](home.js)  
- [`inputs`](login.js) — [login.js](login.js)  
- [`buttons`](login.js) — [login.js](login.js)  
- [`form_container`](login.js) — [login.js](login.js)

All workspace files (click to open):
- [Accessories.css](Accessories.css) | [Accessories.html](Accessories.html)
- [Food.css](Food.css) | [Food.html](Food.html)
- [home.css](home.css) | [home.html](home.html) | [home.js](home.js)
- [index.css](index.css)
- [login.css](login.css) | [login.html](login.html) | [login.js](login.js)
- [menu.css](menu.css)
- [OrderTickets.css](OrderTickets.css) | [OrderTickets.html](OrderTickets.html)
- [README.md](README.md)
- [setting.css](setting.css) | [setting.html](setting.html)
- [ShoppingCart.css](ShoppingCart.css) | [ShoppingCart.html](ShoppingCart.html)
- [SignUp.css](SignUp.css) | [SignUp.html](SignUp.html) | [SignUp.js](SignUp.js)
- [pictures/](pictures/)
