import { db } from "@vercel/postgres";

export async function GET(req: Request) {
  const client = await db.connect();

  const customers = await client.sql`SELECT * from customers`;

  return Response.json(customers.rows);
}
