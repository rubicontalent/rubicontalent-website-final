# Rubicon Talent Website

Professional Next.js + Tailwind CSS website for **Rubicon Talent** at `rubicontalent.net`.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Image Assets

The website works without generated images because each visual area has gradient fallbacks.

To generate optional assets once, set an OpenAI API key locally and run:

```bash
OPENAI_API_KEY=your_key_here npm run generate:images
```

On Windows PowerShell:

```powershell
$env:OPENAI_API_KEY="your_key_here"
npm run generate:images
```

Generated files are saved into `public/images/` and are never requested from OpenAI during page load. The UI expects these production asset names:

- `hero.jpg`
- `employer-services.jpg`
- `candidate-journey.jpg`
- `referral-network.jpg`
- `background-texture.jpg`
- `icons-set.png`
- `logo.png`

## Deploy To Netlify

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Netlify, choose **Add new site** and import the repository.
3. Netlify should detect the included `netlify.toml`.
4. Build command: `npm run build`
5. Publish directory: `.next`
6. The project uses `@netlify/plugin-nextjs` for Next.js App Router support.

## Connect `rubicontalent.net` From GoDaddy

In Netlify:

1. Open the site dashboard.
2. Go to **Domain management**.
3. Add `rubicontalent.net`.
4. Follow Netlify's DNS instructions.

In GoDaddy DNS:

1. Point the apex/root domain using Netlify's recommended `A` records or ALIAS/ANAME option if available.
2. Point `www` to the Netlify subdomain using a `CNAME`.
3. Wait for DNS propagation and enable HTTPS in Netlify.

Important: do **not** delete or change Google Workspace email DNS records. Keep existing `MX`, `TXT`, `SPF`, `DKIM`, and `DMARC` records unless you are intentionally changing email configuration. Website hosting DNS can be updated without moving email away from Google Workspace.

## Forms

The contact form is configured for Netlify Forms using the form name:

`rubicon-talent-contact`

Submissions will appear in Netlify once the site is deployed there. WhatsApp and email links remain available as secondary contact routes.

## Analytics Prep

Optional analytics integrations are prepared through environment variables:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=0000000
```

Only set these when the relevant accounts are ready.

## Structure

- `app/` - Next.js App Router, metadata, sitemap, robots
- `components/` - reusable site sections
- `public/images/` - generated or manually added website visuals
- `scripts/generate-images.ts` - optional one-time image generation script
- `netlify.toml` - Netlify deployment configuration
