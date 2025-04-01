"use client";

import { Home, Info, CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto md:w-[90%] lg:w-auto mt-5 z-50">
            <div className="backdrop-blur-md bg-background/10 p-4 rounded-full w-full flex justify-between items-center">

                <div className="flex gap-4 md:gap-6 items-center">
                    <Link className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" href="/">
                        <Home size={22} />
                        <span className="hidden md:inline">Home</span>
                    </Link>
                    <a className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" href="/about">
                        <Info size={22} />
                        <span className="hidden md:inline">About</span>
                    </a>
                    <a className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" href="/timeline">
                        <CalendarDays size={22} />
                        <span className="hidden md:inline">Timeline</span>
                    </a>
                    <a className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" href="/venue">
                        <MapPin size={22} />
                        <span className="hidden md:inline">Venue</span>
                    </a>
                    <a className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" href="/speakers">
                        <Users size={22} />
                        <span className="hidden md:inline">Speakers</span>
                    </a>
                </div>

                {/* Right Side Content */}
                <div className="ml-10 hidden md:block">
                    <a
                        className="cursor-pointer 
							   border-2 border-white hover:border-blue-500
							   justify-items-center rounded-full w-30
							   bg-black p-3
							   transition-all duration-300 ml-10"
                        href="/register"
                    >
                        Register!
                    </a>
                </div>
            </div>
        </div>
    );
}
