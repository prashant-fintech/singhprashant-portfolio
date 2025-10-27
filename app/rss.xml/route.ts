import { generateRSS } from "@/lib/rss";

export async function GET() {
  const rss = generateRSS();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}