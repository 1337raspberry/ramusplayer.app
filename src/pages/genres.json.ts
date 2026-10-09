import genres from "../data/genres.json";

// The full bundled tree, fetched by the explorer on first use.
export function GET() {
  return new Response(JSON.stringify(genres), {
    headers: { "Content-Type": "application/json" },
  });
}
