# Banner Padel — Landing Page

Landing page for [Banner Padel](https://www.bannerpadel.ie/), Clare's first indoor padel club in Ennis, Co. Clare.

A fast, dependency-free static site: plain HTML, CSS and vanilla JavaScript. No build step required.

## Structure

```
index.html    # single-page layout (hero, club, facilities, programmes, padel intro, FAQ, signup)
styles.css    # all styling, responsive + reduced-motion friendly
script.js     # nav, scroll-reveal animations, signup form handling
favicon.svg   # padel-ball mark
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Before launch

- **Mailing list form**: `script.js` currently shows a success message client-side only. Wire the form in `index.html` to your email provider (Mailchimp embedded form, Brevo, Formspree, etc.).
- **Address & contact**: add the full street address, Eircode, phone and email once confirmed (also update the JSON-LD block in `index.html` for local SEO).
- **Booking link**: point the booking-related CTAs at your court-booking system (e.g. Playtomic/MATCHi) when live.
- **Photos**: swap the stock court photos in `images/` for real photography of the facility when available.

## Deploy

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages. For GitHub Pages, enable Pages on the `main` branch root in the repo settings.
