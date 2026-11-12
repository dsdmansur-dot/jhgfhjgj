import { NextResponse } from "next/server";
import { clean, isPhone, sendTelegramLead } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = clean(data.get("name"), 80);
    const age = Number(clean(data.get("age"), 3));
    const residence = clean(data.get("residence"), 100);
    const destination = clean(data.get("destination"), 100);
    const program = clean(data.get("program"), 100);
    const phone = clean(data.get("phone"), 30);
    const message = clean(data.get("message"), 1200);
    const website = clean(data.get("website"), 100);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !residence || !destination || !program || !Number.isInteger(age) || age < 16 || age > 80 || !isPhone(phone)) {
      return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
    }

    await sendTelegramLead({
      title: "New consultation request",
      fields: [
        ["Name", name],
        ["Age", String(age)],
        ["Country of residence", residence],
        ["Preferred destination", destination],
        ["Program", program],
        ["Phone / WhatsApp", phone],
        ["Message", message || "—"],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Your request could not be delivered. Please try again in a moment." },
      { status: 500 },
    );
  }
}
