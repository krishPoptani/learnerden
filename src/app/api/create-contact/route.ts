import { NextResponse } from "next/server";
import { prisma } from "../utils/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      id,
      phone,
      email,
      address,
      facebookLink,
      twitterLink,
      linkedinLink,
      instagramLink,
    } = body;

    if (!phone || !email || !address) {
      return NextResponse.json(
        { error: "phone, email, and address are required fields." },
        { status: 400 }
      );
    }

    // Upsert based on `id`
    const contact = await prisma.contactUs.upsert({
      where: { id: id || 0 },
      update: {
        phone,
        email,
        address,
        facebookLink: facebookLink || null,
        twitterLink: twitterLink || null,
        linkedinLink: linkedinLink || null,
        instagramLink: instagramLink || null,
      },
      create: {
        phone,
        email,
        address,
        facebookLink: facebookLink || null,
        twitterLink: twitterLink || null,
        linkedinLink: linkedinLink || null,
        instagramLink: instagramLink || null,
      },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error("Error handling contact:", error);
    return NextResponse.json(
      { error: "An error occurred while handling the contact." },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const contact = await prisma.contactUs.findUnique({
      where: { id: 2 },
    });

    if (!contact) {
      return NextResponse.json(
        { error: "Contact not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching contacts." },
      { status: 500 }
    );
  }
}
