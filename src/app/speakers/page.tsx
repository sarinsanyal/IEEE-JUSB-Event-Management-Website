import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Speakers() {
    return (
        <div className="min-h-screen">
                <h1 className="text-center font-extrabold text-4xl lg:text-5xl pt-24 pb-4">
                    SPEAKERS
                </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20 mt-10">
                <a href="https://www.linkedin.com/in/panisap/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-md h-full flex flex-col bg-background/10 transition-transform transform hover:scale-102 hover:border-2 hover:border-white hover:shadow-xl">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/saptarshiPani.png" className="rounded-full" width={150} height={150} alt="Saptarshi Pani" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-white">Saptarshi Pani</h2>
                            <p className="mt-2 text-gray-300 text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from the Department of Electrical Engineering, Forbes and ET unstoppable Leader, Working professional at Texas Instruments, part-time professional at co-founded startup Alchemyst AI.
                            </p>
                        </CardContent>
                    </Card>
                </a>

                <a href="https://www.linkedin.com/in/sapghosh/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-md h-full flex flex-col bg-background/10 transition-transform transform hover:scale-102 hover:border-2 hover:border-white hover:shadow-xl">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/saptarshiGhosh.png" className="rounded-full" width={150} height={150} alt="Saptarshi Ghosh" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-white">Saptarshi Ghosh</h2>
                            <p className="mt-2 text-gray-300 text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from Department of Instrumentation and Electronic Engineering, Ex UC Berkeley, Professional in ASIC at Intel Corporation, President of Global Students and Young Professionals at IEEE Computer Society.
                            </p>
                        </CardContent>
                    </Card>
                </a>

                <a href="https://jadavpuruniversity.in/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-md h-full flex flex-col bg-background/10 transition-transform transform hover:scale-102 hover:border-2 hover:border-white hover:shadow-xl">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/vc.png" className="rounded-full" width={150} height={150} alt="Dr. Bhaskar Gupta" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-white">Dr. Bhaskar Gupta</h2>
                            <p className="mt-2 text-gray-300 text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from Department of Electronics and Telecommunication, Former Senior Professor at Department of ETCE, and current Honourable Vice-Chancellor of Jadavpur University.
                            </p>
                        </CardContent>
                    </Card>
                </a>
            </div>
        </div>
    );
}
