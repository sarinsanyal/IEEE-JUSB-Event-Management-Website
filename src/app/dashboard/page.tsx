"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Dashboard() {
    interface User {
        attendance: boolean;
        name: string;
        email: string;
        phone: string;
        department: string;
        year: string;
    }

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isScanning, setIsScanning] = useState(false);
    const [qrResult, setQrResult] = useState<string | null>(null);
    const scannerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function fetchUser() {
            if (loading) console.log("Loading user data...");
            (async () => {
                try {
                    const res = await fetch("/api/user");
                    const data = await res.json();
                    setUser(data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
                setLoading(false);
            })();
        }

        fetchUser();
    }, [loading]);

    useEffect(() => {
        if (!isScanning || !scannerRef.current) return;

        const scanner = new Html5QrcodeScanner("qr-reader", {
            fps: 10,
            qrbox: { width: 250, height: 250 },
        }, false);

        scanner.render(
            (decodedText: string) => {
                scanner.clear();
                setIsScanning(false);
                setQrResult(decodedText);
                if (user && user.email) {
                    const qrDataWithUserEmail = JSON.stringify({ secretKey: decodedText, userEmail: user.email });
                    markAttendance(qrDataWithUserEmail);
                } else {
                    console.error("User data is not available to include userId.");
                }
            },
            (err) => console.error("QR Scan Error:", err)
        );

        return () => {
            scanner.clear();
        };
    }, [isScanning, user]);

    async function markAttendance(qrData: string) {
        try {
            const res = await fetch("/api/mark-attendance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ qrData }),
            });

            const data = await res.json();
            console.log(data.message);

            if (res.ok) alert(data.message);
            else {
                alert(data.error || "Failed to mark attendance.");
            }
        } catch (error) {
            console.error("Error marking attendance:", error);
        }
    }

    return (
        <div className="justify-items-center text-center p-8 min-h-screen">
            <div className="text-2xl md:text-4xl lg:text-5xl items-center mt-20 font-extrabold">
                Dashboard
            </div>

            {user ? (
                <div className="mt-6 text-lg">
                    Your Registered Data is:
                    <Card className="w-full max-w-md shadow-md backdrop-blur-3xl mt-2 pl-10 pr-10 bg-transparent text-white">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Department:</strong> {user.department}</p>
                        <p><strong>Year:</strong> {user.year}</p>
                    </Card>
                    <div className="mt-6 flex flex-col">
                        <button
                            className="bg-transparent cursor-pointer text-white font-bold border-1 border-white py-2 px-4 rounded-lg hover:bg-gray-600"
                            onClick={() => {
                                const newPassword = prompt("Enter your new password:");
                                if (newPassword && newPassword.length < 6) {
                                    alert("Password must be at least 6 characters long.");
                                    return;
                                }
                                if (newPassword) {
                                    fetch("/api/change-password", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
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

                        {!user.attendance ? (
                            <>
                                <button
                                    className="bg-transparent cursor-pointer text-white font-bold border-1 border-white py-2 px-4 rounded-lg hover:bg-gray-600 mt-5"
                                    onClick={() => setIsScanning(true)}
                                >
                                    Mark Attendance by scanning QR
                                </button>

                                {isScanning && (
                                    <div className="mt-4 p-4 bg-transparent border-1 border-white text-white rounded-lg">
                                        <h2 className="text-lg font-semibold">Scan QR Code</h2>
                                        <div ref={scannerRef} id="qr-reader"></div>
                                        <button
                                            className="mt-2 px-4 py-2 bg-red-500 text-black rounded-lg"
                                            onClick={() => setIsScanning(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}

                                {qrResult && (
                                    <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                                        <p><strong>Data has been scanned!</strong> </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="mt-4 text-lg text-green-500">Attendance already marked!</p>
                        )}

                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center" style={{ alignItems: "center", height: "200px" }}>
                    <span className="font-medium mt-20 sm:text-xl md:text-2xl">Loading...</span>
                </div>
            )}
        </div>
    );
}
