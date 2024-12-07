import { authors } from "./authors";

export async function GET() {
  return Response.json(authors);
}
