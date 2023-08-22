import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
  request: Request,
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    category,
    startDate,
    endDate,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      return NextResponse.error();
    }
  });

  try {
    const listing = await prisma.listing.create({
    
      data: {
        title,
        description,
        category,
        startDate,
        endDate,
        userId: currentUser.id
      }
    });
  
    return NextResponse.json(listing);
  }
  catch (error) {
    console.error("Error creating listing: ", error);
    return NextResponse.json({ status: 500, message: 'Error creating listing' });
  }
  
}

