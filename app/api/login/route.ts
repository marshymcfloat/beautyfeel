import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import Account from "@/lib/models/Account";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, password } = data;

  const foundAcc = await Account.findOne({
    username,
  });

  if (!foundAcc) {
    return new Response(JSON.stringify({ message: "Account not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foundAcc.password);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({ message: "Login successful", accountID: foundAcc._id }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
