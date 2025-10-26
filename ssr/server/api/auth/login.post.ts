import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDB } from "../../utils/mongo";

const SECRET = process.env.JWT_SECRET || "changeme";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);

    const db = await getDB();
    const user = await db.collection("users").findOne({ email });
    if (!user) throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id, email: user.email }, SECRET, {
        expiresIn: "7d",
    });

    setCookie(event, "token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60,
        sameSite: 'lax',
        path: '/',
    });

    return {
        success: true,
        token,
        user: {
            _id: user._id.toString(),
            email: user.email,
            name: user.name
        }
    };
});
