import bcrypt from "bcryptjs";
import { getDB } from "../../utils/mongo";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, name } = body;

  if (!email || !password)
    throw createError({ statusCode: 400, statusMessage: "Email and password required" });

  const db = await getDB();
  const users = db.collection("users");

  const exists = await users.findOne({ email });
  if (exists) throw createError({ statusCode: 400, statusMessage: "Email already used" });

  const hashed = await bcrypt.hash(password, 10);
  const result = await users.insertOne({
    email,
    password: hashed,
    name,
    createdAt: new Date(),
  });

  return { success: true, id: result.insertedId };
});
