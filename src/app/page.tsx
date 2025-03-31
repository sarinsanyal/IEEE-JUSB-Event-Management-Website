import Image from "next/image";

export default function Home() {
	return (
		<div className=" flex flex-col justify-items-center min-h-screen p-8 font-[var(--font-geist-sans)] text-center">

			<main className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center" style={{ alignItems: "center", height: "200px" }}>
				<Image
					src="/ieeejusb.png"
					alt="IEEE JUSB Logo"
					width={250}
					height={250}
					className="rounded-lg pt-20"
				/>
				<span className="font-medium sm:text-xl md:text-2xl">presents</span>
			</main>

			<div className="bg-gradient-to-r text-4xl sm:text-6xl md:text-8xl font-extrabold from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient pt-15 pb-15">
				Hello IEEE 2.0
			</div>

			<div className="pr-20 pl-20 mb-10 font-semibold text-xl md:text-2xl z-10 lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600  to-white">
			Dive into the world where dreams become true, hand in hand with us as we attempt to enlighten your path!
			</div>

			<div className="flex justify-center"> 
				<a 
					className="cursor-pointer 
							   border-1 border-white hover:border-blue-500
							   justify-items-center rounded-full w-30
							   bg-black p-4 pl-4
							   transition-all duration-300
							   shadow-[0_0_15px_15px_rgba(157,23,77,1)]"
					href = "/signup"
				>
					Register!
				</a>
			</div>
		</div>
	);
}