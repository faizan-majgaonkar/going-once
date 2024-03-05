import dbConn from "@/db";
import Users from "@/db/schema/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const users = await dbConn.select().from(Users);
  return NextResponse.json({ hello: users });
}
