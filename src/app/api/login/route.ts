import { NextRequest, NextResponse } from 'next/server';
import  connectToDatabase  from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const { email, password } = await req.json();

    // finding user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Login successful', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
