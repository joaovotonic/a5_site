import { getGoogleReviews } from "@/lib/reviews";

export async function GET() {
  return Response.json(await getGoogleReviews());
}
