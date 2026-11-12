type TelegramPayload = {
  title: string;
  fields: [string, string][];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function sendTelegramLead({ title, fields }: TelegramPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram integration is not configured");
  }

  const lines = fields.map(
    ([label, value]) => `<b>${escapeHtml(label)}</b>\n${escapeHtml(value)}`,
  );
  const text = [`<b>${escapeHtml(title)}</b>`, "", ...lines].join("\n\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(10000),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Telegram could not deliver the request");
  }
}

export function clean(value: FormDataEntryValue | null, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function isPhone(value: string) {
  return /^[+\d][\d\s()\-]{6,24}$/.test(value);
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
