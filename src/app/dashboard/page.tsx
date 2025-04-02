"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("/api/user");
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
            setLoading(false);
        }

        fetchUser();
    }, []);

    return (
        <div className="justify-items-center text-center p-8 min-h-screen">
            <div className="text-2xl md:text-4xl lg:text-5xl items-center mt-20 font-extrabold">
                Dashboard
            </div>

            {user ? (
                <div className="mt-6 text-lg">
                    Your Registered Data is:
                    <Card className="w-full max-w-md shadow-md backdrop-blur-3xl pl-10 pr-10 bg-transparent text-white">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Department:</strong> {user.department}</p>
                        <p><strong>Year:</strong> {user.year}</p>
                    </Card>
                    <div className="mt-6">
                        <button
                            className="bg-transparent cursor-pointer text-white font-bold border-1 border-white py-2 px-4 rounded-lg hover:bg-gray-600"
                            onClick={() => {
                                const newPassword = prompt("Enter your new password:");
                                if (newPassword && newPassword.length < 6) {
                                    alert("Password must be at least 6 characters long.");
                                    return;
                                }
                                if (newPassword && newPassword.length >= 6) {
                                    fetch("/api/change-password", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ password: newPassword }),
                                    })
                                        .then((res) => {
                                            if (res.ok) {
                                                alert("Password changed successfully!");
                                            } else {
                                                alert("Failed to change password.");
                                            }
                                        })
                                        .catch((error) => {
                                            console.error("Error changing password:", error);
                                            alert("An error occurred. Please try again.");
                                        });
                                }
                            }}
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center"
                    style={{ alignItems: "center", height: "200px" }}
                >
                    <span className="font-medium mt-20 sm:text-xl md:text-2xl">Loading...</span>
                </div>
            )}
        </div>

    )
}   