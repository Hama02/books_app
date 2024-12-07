// pages/api/authors/[id].ts
import { NextRequest, NextResponse } from "next/server";
import { authors } from "../authors";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const author = authors.find((author) => author.id === id);

  if (!author) {
    return NextResponse.json({ message: "Author not found" }, { status: 404 });
  }

  return NextResponse.json(author);
}
