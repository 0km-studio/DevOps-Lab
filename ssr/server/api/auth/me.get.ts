import jwt from "jsonwebtoken";
import { getDB } from "../../utils/mongo";
import { ObjectId } from "mongodb";

const SECRET = process.env.JWT_SECRET || "changeme";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  if (!token) throw createError({ statusCode: 401, statusMessage: "No token" });

  try {
    const decoded: any = jwt.verify(token, SECRET);
    const db = await getDB();
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(decoded.userId) }, { projection: { password: 0 } });

    return user;
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: "Invalid token" });
  }
});
