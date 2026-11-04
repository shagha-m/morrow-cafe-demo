# Morrow Café — Portfolio Concept

A warm, responsive four-page café website concept. This is a **fictional demo**, not a launched client website.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. All assets are local except the Google Maps embed, which needs internet access.

## Publish with GitHub + Vercel or Netlify
1. Create a GitHub repository, for example `morrow-cafe-demo`, and upload the **contents of this folder**. The `index.html` must be at the root.
2. In Vercel, choose **Add New → Project → Import Git Repository**. Choose **Other** for framework preset and leave the build command blank. Set output directory to `.` if asked, then deploy.
3. Alternatively in Netlify, choose **Add new site → Import an existing project → GitHub**, select the repository, leave the build command blank, set publish directory to `.`, and deploy.
4. GitHub Pages also works: **Settings → Pages → Deploy from a branch → main / (root)**.

## Before using it for a real café
- Replace the fictional name, menu and prices, text, hours, and Portland placeholder with actual business information.
- Update the Google Maps embed URL and external link in `contact.html` with the real address.
- Set the WhatsApp number. In `script.js`, replace the demo click handler with a link to `https://wa.me/COUNTRYCODEPHONENUMBER` (international digits only, no +, spaces or punctuation), then point WhatsApp links in the HTML to it.
- Replace the demo photographs with images you have permission to use. The included images are AI-generated for this portfolio concept. Responsive WebP sizes are used to reduce download size; keep the srcset/sizes attributes accurate if replacing images.
- Replace footer disclaimer and update page meta descriptions. Test menu prices and business hours.

## What's included
Four static pages (`index.html`, `about.html`, `menu.html`, `contact.html`), one shared stylesheet, a tiny dependency-free JS file for navigation, scroll progress, reveal animations, and the WhatsApp demo notice, local responsive WebP images generated for this concept and favicon. Mobile navigation, alt text, semantic HTML, focus styling, reduced-motion support, sticky navigation, menu jump links, lightweight reveal animations, a cinematic layered 3D section on the homepage (CSS perspective and pointer-driven tilt, disabled for reduced motion), lazy loading on non-hero images, and responsive layouts are included. The map is externally embedded and will not render in offline previews.

This **static demo is not WordPress**. GitHub Pages/Vercel/Netlify will host it as-is; a real WordPress version would need a PHP/database host or a migration into a WordPress theme/block layout.
