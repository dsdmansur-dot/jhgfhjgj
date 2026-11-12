# Mansur — Work & Travel Journal

A premium editorial creator platform built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_ADMIN_CHAT_ID` in `.env.local`. Both values are server-only. Consultation and business inquiry forms validate input and deliver formatted requests to the administrator through Telegram. The UI shows success only after Telegram accepts the message.

The media kit is generated as a real PDF at `/api/media-kit`. Audience statistics deliberately use editable placeholders until verified analytics are supplied. Update platform links and profile content in `lib/content.ts`.

## Checks

```bash
npm run typecheck
npm run build
```