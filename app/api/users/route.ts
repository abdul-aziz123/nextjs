import { db } from "@vercel/postgres";

export async function GET(req: Request) {
  const client = await db.connect();

  const users = await client.sql`
  SELECT * FROM users;
  `;

  return Response.json(users.rows);
}
