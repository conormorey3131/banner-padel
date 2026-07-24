# Banner Padel — Website

Pre-launch website for [Banner Padel](https://www.bannerpadel.ie/), Clare's first indoor padel club in Ennis, Co. Clare.

A fast, dependency-free static site: plain HTML, CSS and vanilla JavaScript. No build step required.

## Structure

```
index.html                     # Home — opening soon, club highlights, mailing list signup
about.html                     # What is Padel Tennis?
contact.html                   # Mailing list signup
styles.css                     # all styling
script.js                      # signup form handling + footer year
favicon.svg                    # padel-ball mark
images/                        # logo + court photos
googleca20b32ddd9b190c.html    # Google Search Console verification
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Before launch

- **Mailing list form**: `script.js` currently shows a success message client-side only. Wire the forms in `index.html` and `contact.html` to your email provider (Mailchimp embedded form, Brevo, Formspree, etc.).
- **Address & contact**: add the full street address, Eircode, phone and email once confirmed (also update the JSON-LD block in `index.html` for local SEO).
- **Photos**: swap the stock court photos in `images/` for real photography of the facility when available.

## Deploy

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages. For GitHub Pages, enable Pages on the `main` branch root in the repo settings.
