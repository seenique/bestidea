This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Branding

Custom brand gradient and logo are configured in `src/app/globals.css` and `public/logo.svg`.

## Lead form → Google Sheets

Server route `src/app/api/lead/route.ts` appends submissions to a Google Sheet.

Env vars: create `.env.local` in `web` with

```
GSHEET_ID=your_spreadsheet_id
GSVC_EMAIL=service_account_email@project.iam.gserviceaccount.com
GSVC_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
GSHEET_SHEET=Leads  # Set to your sheet tab name if different
```

Notes:
- Share the target Sheet with `GSVC_EMAIL` (Editor).
- Use a sheet named `Leads` with columns: `createdAt | name | contact | about`.
- Paste private key with literal `\n` line breaks, not real newlines.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
