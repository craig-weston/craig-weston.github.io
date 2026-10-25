# Craig Weston's former portfolio · Redirect only

> **The portfolio has moved to [craigweston.co.uk](https://craigweston.co.uk/).**

This repository previously hosted the portfolio at [craig-weston.github.io](https://craig-weston.github.io/). Its `master` branch now contains only lightweight browser redirects so bookmarks and old links can lead to the new website.

## Where everything lives

| Purpose | Location |
| --- | --- |
| Current website | [craigweston.co.uk](https://craigweston.co.uk/) |
| Current website source | [craig-weston/craigweston-website](https://github.com/craig-weston/craigweston-website) |
| Hosting and automatic deployments | Cloudflare Pages, triggered by pushes to the new website's `main` branch |
| Historical portfolio and project files | [`archive/old-portfolio-2026`](https://github.com/craig-weston/craig-weston.github.io/tree/archive/old-portfolio-2026) |

## Redirect behaviour

- `index.html` sends the former homepage to `https://craigweston.co.uk/`.
- A few old anchors and paths have friendly destinations, including `#systems` to the design page and `#contact` to the contact section.
- `404.html` forwards missing old page URLs to the new site.
- Both pages include a visible link in case automatic redirection is disabled, a `noindex` tag and the new site's canonical URL.
- GitHub Pages is static and cannot issue arbitrary HTTP 301 redirects using these files. They use JavaScript navigation and an HTML meta refresh fallback instead.

## Publishing

The special `craig-weston.github.io` repository publishes from the default `master` branch at the root. Do **not** add a `CNAME` file pointing to `craigweston.co.uk` here: the custom domain is managed by Cloudflare, not GitHub Pages.

This repository is not the new website's deployment source. Commit new website changes in [`craigweston-website`](https://github.com/craig-weston/craigweston-website) instead.

## What happened to the old code?

It was **archived rather than destroyed**. The complete previous `master` tree remains available on the `archive/old-portfolio-2026` branch. To restore a particular file, retrieve it from that branch or its Git history.

© Craig Weston.
