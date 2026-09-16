import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return NextResponse.json({ success: false, error: "Please submit a valid form." }, { status: 400 }); }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ success: false, error: "Please check the highlighted form fields." }, { status: 400 });

  // Connect an email provider here using RESEND_API_KEY and CONTACT_EMAIL. No enquiry data is persisted until configured.
  console.info("Contact enquiry received", { interestedIn: parsed.data.interestedIn });
  return NextResponse.json({ success: true, message: "Thanks! We have received your enquiry and will be in touch soon." });
}
