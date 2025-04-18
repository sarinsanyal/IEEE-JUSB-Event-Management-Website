"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//@ts-expect-error: Ignoring type error due to use of a third-party library without types
import validator from "validator";
import { useRouter } from "next/navigation";
type RegisterData = {
	name: string;
	email: string;
	phone: string;
	department: string;
	year: string;
	password: string;
	confirmPassword: string;
};

export default function Register() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	// const [user, setUser] = useState(null);

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors, isValid },
	} = useForm<RegisterData>({
		mode: "onChange",
	});

	const onSubmit = async (data: RegisterData) => {
		// console.log("\nUser Registration Data: ", data);
		setLoading(true);
		console.log("User is being registered...")
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (response.ok) {
				console.log("Registration Successfull! ", result);
				alert("Registration Successful! Redirecting to login page...");
				router.push("/login");
			}
			else {
				console.error("Registration Failed: ", result.error);
				alert(result.error);
			}

		} catch (error) {
			console.error("Error During Registration!! ", error);
		}
		setLoading(false);
	};

	return (
		<div className="flex min-h-screen items-center justify-center mt-10 px-4 md:px-8 lg:px-16 bg-transparent text-white">
			<div className="hidden lg:flex flex-col text-center justify-center pt-12 pb-12 w-1/2">
				<h1 className="text-5xl font-extrabold mb-4">From dark pits of oblivion to the hallows of glory,</h1>
				<h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">Begin this galactic event with a bang!</h1>
			</div>

			<div className="w-full sm:w-96 lg:w-1/2 flex justify-center">
				<Card className="w-full max-w-md shadow-md backdrop-blur-3xl bg-transparent text-white">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-bold">Register</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...useForm<RegisterData>()}>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
								<FormField control={control} name="name" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your name"  {...register("name", { required: "Name is required" })} />
										</FormControl>
										<FormMessage>{errors.name?.message}</FormMessage>
									</FormItem>
								)} />

								<FormField
									control={control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													{...field}
													type="email"
													placeholder="Enter your email"
													{...register("email", {
														required: "Email is required",
														validate: (value: string) =>
															validator.isEmail(value) || "Invalid email format",
													})}
												/>
											</FormControl>
											<FormMessage>{errors.email?.message}</FormMessage>
										</FormItem>
									)}
								/>

								<FormField control={control} name="phone" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your phone number"
												{...register("phone",
													{
														required: "Phone number is required",
														validate: (value: string) =>
															validator.isMobilePhone(value, 'any') || "Invalid phone number format",
													})}
											/>
										</FormControl>
										<FormMessage>{errors.phone?.message}</FormMessage>
									</FormItem>
								)} />

								<FormField control={control} name="department" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your department" {...register("department", { required: "Department is required" })} />
										</FormControl>
										<FormMessage>{errors.department?.message}</FormMessage>
									</FormItem>
								)} />

								<FormField control={control} name="year" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input {...field} placeholder="Enter your year" {...register("year", { required: "Year is required" })} />
										</FormControl>
										<FormMessage>{errors.year?.message}</FormMessage>
									</FormItem>
								)} />

								<FormField
									control={control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="relative">

													<Input
														{...field}
														type={showPassword ? "text" : "password"}
														placeholder="Enter your password"
														{...register("password", {
															required: "Password is required",
															minLength: { value: 6, message: "Must be at least 6 characters" },
														})}
													/>
													<button
														type="button"
														className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-200"
														onClick={() => setShowPassword(!showPassword)}
													>
														{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
													</button>
												</div>
											</FormControl>
											<FormMessage>{errors.password?.message}</FormMessage>
										</FormItem>
									)}
								/>

								<FormField
									control={control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="relative">
													<Input
														{...field}
														type={showConfirmPassword ? "text" : "password"}
														placeholder="Confirm your password"
														{...register("confirmPassword", {
															required: "Please confirm your password",
															validate: (value) =>
																value === watch("password") || "Passwords do not match",
														})}
													/>
													<button
														type="button"
														className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-200"
														onClick={() => setShowConfirmPassword(!showConfirmPassword)}
													>
														{showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
													</button>
												</div>
											</FormControl>
											<FormMessage>{errors.confirmPassword?.message}</FormMessage>
										</FormItem>
									)}
								/>

								<Button type="submit" className="cursor-pointer w-full" disabled={!isValid || loading}>
									{loading ? "Registering you in..." : "Register"}
								</Button>
							</form>
						</Form>
						<div className="relative flex items-center my-4">
							<div className="w-full border-b border-gray-300"></div>
							<span className="px-3 text-sm text-gray-500">OR</span>
							<div className="w-full border-b border-gray-300"></div>
						</div>

						{/*oauth, will implement after reading docs if time permits*/}
						<div className="flex mt-4 flex-col gap-3">
							<Button variant="outline" className="w-full flex items-center text-black *:justify-center gap-2 cursor-pointer">
								<FcGoogle className="text-xl" /> Continue with Google
							</Button>
						</div>

						<p className="mt-4 text-center text-sm">
							Already Registered?{" "}
							<Link href="/login" className="text-blue-300 hover:underline">
								Login
							</Link>
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}