"use client";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const registerSchema = z.object({
	name: z.string().min(2,"Name must be atleast 2 characters" ),
	email: z.string().email("Invalid Email Format"),
	password: z.string().min(6, "Password must be atleast 6 characters"),
	confirmPassword: z.string().min(6, "Password must be atleast 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords do not match",
	path: ["confirmPassword"],
})

type FormData = z.infer<typeof registerSchema>;

export default function Register() {
	const [showPassword, setShowPassword] = useState(false); //eye icon
	const { register, handleSubmit, formState: {errors}} = useForm<FormData>({
		resolver: zodResolver(registerSchema),	
	})

	const onSubmit = async (data: FormData) => {
		console.log(data); 
	};


	return (
		<div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl font-bold">Register</h1>
		</div>
	);
}
