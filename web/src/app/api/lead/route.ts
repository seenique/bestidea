import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("contact") || "").trim();
  const about = String(formData.get("about") || "").trim();

  if (!name || !contact) {
    return NextResponse.json({ ok: false, error: "name and contact required" }, { status: 400 });
  }

  try {
    const spreadsheetId = process.env.GSHEET_ID;
    const clientEmail = process.env.GSVC_EMAIL;
    const privateKey = process.env.GSVC_KEY?.split(String.raw`\n`).join("\n");

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.warn("Missing Google Sheets env vars");
      return NextResponse.json({ ok: false, error: "Server config error" }, { status: 500 });
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const createdAt = new Date().toISOString();
    const sheetTab = process.env.GSHEET_SHEET || "Leads";

    // Properly quote sheet tab for A1 notation (handles spaces/special chars)
    const a1Quote = (name: string) => `'${name.replace(/'/g, "''")}'`;

    // Ensure sheet exists; if not, create it
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const titles = (meta.data.sheets || []).map(s => s.properties?.title).filter(Boolean) as string[];
    console.log("Sheets meta:", { spreadsheetId, sheetTab, titles });
    if (!titles.includes(sheetTab)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            { addSheet: { properties: { title: sheetTab } } },
          ],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${a1Quote(sheetTab)}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[createdAt, name, contact, about]],
      },
    });

    return NextResponse.redirect(new URL("/thank-you", request.url), { status: 303 });
  } catch (e) {
    console.error("Sheets append error", e);
    return NextResponse.json({ ok: false, error: "Failed to save" }, { status: 500 });
  }
}


