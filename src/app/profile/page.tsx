"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompleteProfile({userEmail} : {userEmail: string}){
    const router = useRouter();
    const [form, setForm]  = useState ({phone: '', university: '', department: '', year: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
}

