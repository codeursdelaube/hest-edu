import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.subject || !body.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Branchement e-mail / CRM à prévoir.
  return NextResponse.json({ ok: true });
}
