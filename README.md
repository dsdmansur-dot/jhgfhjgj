# Mansur — Work & Travel Journal

A premium editorial creator platform built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_ADMIN_CHAT_ID` in `.env.local`. Both values are server-only. Consultation and business inquiry forms validate input and deliver formatted requests to the administrator through Telegram. The UI shows success only after Telegram accepts the message.

The media kit is generated as a real PDF at `/api/media-kit`. Audience statistics deliberately use editable placeholders until verified analytics are supplied. Update platform links, profile content and article cover paths in `lib/content.ts`.

## Adding photography

Photography is intentionally not included in the test version. Editorial placeholders preserve the final layouts. Add original images to `public/images`, then set their paths (for example, `/images/hero.jpg`) in the image slots:

- Hero, story and partnership portraits: the corresponding components in `components/`.
- Article covers: each article's `image` field in `lib/content.ts`.
- Social previews: each platform's `image` field in `lib/content.ts`.

The shared `EditableImage` component automatically switches from a placeholder to an optimized Next.js image when a path is provided.

## Checks

```bash
npm run typecheck
npm run build
```