import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function GET() {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]);
  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const sans = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.078, 0.125, 0.153);
  const accent = rgb(0.863, 0.376, 0.235);

  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: rgb(0.953, 0.941, 0.914) });
  page.drawText("MANSUR / WORK & TRAVEL JOURNAL", { x: 48, y: 782, size: 10, font: bold, color: ink });
  page.drawText("MEDIA KIT / 2026", { x: 430, y: 782, size: 9, font: sans, color: ink });
  page.drawLine({ start: { x: 48, y: 760 }, end: { x: 547, y: 760 }, thickness: 0.7, color: ink });
  page.drawText("Real stories.", { x: 48, y: 665, size: 52, font: serif, color: ink });
  page.drawText("A wider world.", { x: 48, y: 609, size: 52, font: serif, color: accent });
  page.drawText("Work & Travel content built on personal experience, practical knowledge", { x: 50, y: 570, size: 11, font: sans, color: ink });
  page.drawText("and honest conversations about building a life across borders.", { x: 50, y: 554, size: 11, font: sans, color: ink });

  page.drawText("AUDIENCE & PERFORMANCE", { x: 48, y: 495, size: 10, font: bold, color: ink });
  const stats = ["TOTAL AUDIENCE", "MONTHLY REACH", "AVERAGE VIDEO VIEWS", "ENGAGEMENT RATE"];
  stats.forEach((stat, index) => {
    const x = index % 2 === 0 ? 48 : 310;
    const y = index < 2 ? 430 : 340;
    page.drawText(stat, { x, y: y + 30, size: 9, font: bold, color: ink });
    page.drawText("—", { x, y: y - 10, size: 40, font: serif, color: accent });
    page.drawText("Verified data available on request", { x, y: y - 33, size: 9, font: sans, color: ink });
  });
  page.drawLine({ start: { x: 48, y: 270 }, end: { x: 547, y: 270 }, thickness: 0.7, color: ink });
  page.drawText("COLLABORATION FORMATS", { x: 48, y: 240, size: 10, font: bold, color: ink });
  page.drawText("Sponsored stories  /  Brand integration  /  Employer spotlight", { x: 48, y: 213, size: 11, font: sans, color: ink });
  page.drawText("UGC production  /  Long-term brand ambassadorship", { x: 48, y: 193, size: 11, font: sans, color: ink });
  page.drawText("Audience geography, age distribution, platform analytics and previous", { x: 48, y: 145, size: 10, font: sans, color: ink });
  page.drawText("collaborations are shared in the current verified media kit on request.", { x: 48, y: 130, size: 10, font: sans, color: ink });
  page.drawText("START A CONVERSATION", { x: 48, y: 64, size: 9, font: bold, color: accent });
  page.drawText("Use the business inquiry form on the website.", { x: 214, y: 64, size: 10, font: sans, color: ink });

  const bytes = await pdf.save();
  return new Response(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=mansur-media-kit.pdf",
      "Cache-Control": "no-store",
    },
  });
}
