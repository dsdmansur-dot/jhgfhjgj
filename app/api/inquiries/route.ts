import { NextResponse } from "next/server";
import { clean, isEmail, sendTelegramLead } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = clean(data.get("name"), 80);
    const company = clean(data.get("company"), 100);
    const email = clean(data.get("email"), 120);
    const type = clean(data.get("type"), 100);
    const message = clean(data.get("message"), 1500);
    const website = clean(data.get("website"), 100);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !company || !type || !message || !isEmail(email)) {
      return NextResponse.json({ message: "Please complete all fields with a valid email." }, { status: 400 });
    }

    await sendTelegramLead({
      title: "New business inquiry",
      fields: [
        ["Contact", name],
        ["Company", company],
        ["Email", email],
        ["Collaboration", type],
        ["Project", message],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Your inquiry could not be delivered. Please try again in a moment." },
      { status: 500 },
    );
  }
}
