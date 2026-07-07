# Home Medix Website

A premium static website foundation for Home Medix India Private Limited, positioned as a Bengaluru-based medical equipment manufacturer and supplier for respiratory care and home healthcare equipment.

## Included

- Conversion-focused homepage in `index.html`
- Premium medical visual system in `assets/styles.css`
- Mobile navigation in `assets/script.js`
- Organization, LocalBusiness/MedicalBusiness, WebSite, and FAQ structured data
- `robots.txt`, `sitemap.xml`, and `llms.txt` for search and AI discoverability
- Open Graph SVG preview asset in `assets/og-home-medix.svg`
- GitHub Pages deployment workflow in `.github/workflows/pages.yml`

## GitHub Pages test deployment

This repository is configured to publish a test deployment with GitHub Pages using GitHub Actions and the default `github.io` Pages URL. No custom domain is configured.

1. Merge or push changes to the `main` branch, or manually run the **Deploy static site to GitHub Pages** workflow from the Actions tab.
2. The workflow checks whether a GitHub Pages site exists for the repository. If Pages is missing, it attempts to create a workflow-based Pages site before deployment.
3. The workflow uploads the repository contents and deploys them to the repository's default GitHub Pages test URL.
4. Leave **Custom domain** empty in **Settings → Pages** for this test deployment.
5. If GitHub rejects automatic Pages creation because the workflow token does not have repository administration rights, an owner should open **Settings → Pages** once and set **Build and deployment → Source** to **GitHub Actions**, then rerun the workflow.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
