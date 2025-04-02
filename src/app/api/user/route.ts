//Dashboard Endpoint

import {NextRequest, NextResponse} from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from "@/models/user";
import jwt from 'jsonwebtoken';





