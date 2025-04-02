import User from "@/models/user";
import connectToDatabase from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();
        const authToken = (await cookies()).get("authToken")?.value;

        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded: { userId: string } = jwt.verify(authToken, process.env.JWT_SECRET as string) as { userId: string };

        await connectToDatabase();
        const user = await User.findOne({ _id: decoded.userId });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        user.password = password;
        await user.save();

        return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error changing password:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}