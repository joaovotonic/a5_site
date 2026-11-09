import { getSocialFeed } from "@/lib/social";

export async function GET() {
  return Response.json(await getSocialFeed());
}
