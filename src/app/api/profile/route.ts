import { NextRequest, NextResponse } from 'next/server';
import  connectToDatabase  from '@/lib/mongodb';
import User from '@/models/user'

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { email, phone, university, department, year } = await req.json();

    const user = await User.findOneAndUpdate(
      { email },
      { phone, university, department, year, isProfileComplete: true },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
