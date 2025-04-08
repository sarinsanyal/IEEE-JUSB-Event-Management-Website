import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function About() {
    return (
        <div className="min-h-screen w-full">
            <div className="flex flex-col font-extrabold text-4xl lg:text-5xl items-center pt-24 pb-2">
                ABOUT US
            </div>
            <div className="ml-10 mr-10 flex flex-col items-center md:flex-row ">
                <div className="md:m-10">
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            <CarouselItem key="1">
                                <div className="p-1">
                                    <Card className="bg-cover bg-[url('/about/doubleslash.png')] bg-center h-[300px]">
                                    </Card>
                                    <div className="p-6 text-center">
                                        <div className="text-lg font-bold">
                                            Double // Slash
                                        </div>
                                        <span className="text-sm">
                                            Double Slash, organised by IEEE JUSB is Jadavpur University&apos;s first ever offline 24 hour hackathon. Here different tracks are provided for the participants. Double Slash attracts uniqueness and creativity packaged in the form of coding and reasoning. IEEE JUSB is going to soon present Double Slash with a bang, so interested participants may as well start to gear up!
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>


                            <CarouselItem key="2">
                                <div className="p-1">
                                    <Card className="bg-cover bg-[url('/about/techX.png')] bg-center h-[300px]">
                                    </Card>
                                    <div className="p-6 text-center">
                                        <div className="text-lg font-bold">
                                            TechX
                                        </div>
                                        <span className="text-sm">
                                            IEEE JUSB is the proud pioneer of TechX Congress which has become a global sensation since. The second edition took place in Shantiniketan and featured talks on diverse topics and an extensive workshop on augmented reality. Stuffed with hackathons and quizzes, this was undoubtedly IEEE JUSB&apos;s one of the most enriching and enjoyable events!
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem key="3">
                                <div className="p-1">
                                    <Card className="bg-cover bg-[url('/about/earthXchange.png')] bg-center h-[300px]">
                                    </Card>
                                    <div className="p-6 text-center">
                                        <div className="text-lg font-bold">
                                            EarthXChange
                                        </div>
                                        <span className="text-sm">
                                            EarthXChange served as a platform to address rising concerns on climate changes and global issues. Insightful talks from industry experts along with competitions and hackathons with different tracks centred on climate sustainability served to stimulate the technical acumen of aspiring students!
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem key="4">
                                <div className="p-1">
                                    <Card className="bg-cover bg-[url('/about/mlas.png')] bg-center h-[300px]">
                                    </Card>
                                    <div className="p-6 text-center">
                                        <div className="text-lg font-bold">
                                            MLAS
                                        </div>
                                        <span className="text-sm">
                                            Machine Learning Accelerator Summit is an event solely dedicated to providing the participants with a strong foundation in Machine Learning. With sessions on python, hands on workshops on machine learning and deep learning and contests the event provided the participants the thrust for them to move forward in their quest of Machine Learning.
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem key="5">
                                <div className="p-1">
                                    <Card className="bg-cover bg-[url('/about/cypher.png')] bg-center h-[300px]">
                                    </Card>
                                    <div className="p-6 text-center">
                                        <div className="text-lg font-bold">
                                            Cypher 3331
                                        </div>
                                        <span className="text-sm">
                                            Organised by IEEE JUSB at Jadavpur University&apos;s annual tech - fest Srijan, Cypher is an exhilirating event based on cryptography and the art of coding and decoding, inviting more than 700 registrations in a span of only 24 hours . Paricipants were taught about different cyphers and challenged with brain storming questions, with the level advancing in later rounds.
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <CarouselPrevious className="bg-transparent cursor-pointer" />
                        <CarouselNext className="bg-transparent cursor-pointer" />
                    </Carousel>
                </div>

                <div className="m-5 text-justify md:text-2xl md:m-15">
                    At IEEE JUSB, we&apos;re more than just a student chapter—we&apos;re a dynamic community of innovators, creators, and problem-solvers committed to driving change through collaboration. Founded in 2010 at one of the oldest and most prestigious universities in the country, JADAVPUR UNIVERSITY, we belong to the Kolkata section of Region 10. As one of the most active student branches in our section, we are there to support you every step of the way whether you&apos;re starting and eager to learn, ready to present your ideas, or passionate about diving into the world of technology or design. Through hands-on workshops, engaging seminars, and other large-scale events thriving throughout the year we intend to bridge the gap between knowledge and real-world application. Together, we spark the fire of learning and innovation, thus building a passionate community that stands on sharing ideas and making impacts!
                </div>
            </div>
        </div>
    )
}