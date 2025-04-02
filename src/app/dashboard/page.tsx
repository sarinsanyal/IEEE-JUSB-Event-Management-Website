"use client";

import {useEffect, useState} from "react";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function fetchUser() {
            try{

            } catch (error) { 
                console.error("Error fetching user:", error);
            }
            setLoading(false);

        }

        fetchUser();
    }, []);

    return (
        <div className="justify-items-center text-center p-8 min-h-screen">
            <div className="text-5xl items-center mt-20 font-extrabold">
                Dashboard
            </div>
        </div>
    )
}   