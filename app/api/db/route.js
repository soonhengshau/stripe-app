// app/api/get-data/route.js
import { query } from "@/app/lib/db";

export async function GET(request) {
  try {
    const result = await query("SELECT * FROM registrations");
    return new Response(JSON.stringify(result.rows), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
