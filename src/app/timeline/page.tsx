export default function Timeline() {
    return (
        <div className="min-h-screen flex flex-col">
            <h2 className="text-center font-extrabold text-4xl lg:text-5xl pt-24 pb-4">
                TIMELINE
            </h2>

            <div className="relative max-w-7xl mx-auto pt-24 pb-24 flex-1">
                <div className="relative">
                    <div className="absolute inset-0 ml-8 w-[4px] bg-gradient-to-b from-transparent via-neutral-200 to-transparent sm:overflow-hidden" />

                    <div className="space-y-20">
                        {[
                            {
                                time: '12-1.00pm',
                                title: 'Freshman to Founder, Journey with IEEE JUSB: Saptarshi Pani.',
                            },
                            {
                                time: '1.00-2.00pm',
                                title: 'Break',
                            },
                            {
                                time: '2.00-2.30pm',
                                title: 'General Address by VC, Jadavpur University and Chairperson IEEE Kolkata Section.',
                            },
                            {
                                time: '2.30-3.15pm',
                                title: 'Web Dev Session.',
                            },
                            {
                                time: '3.15-4.00pm',
                                title: 'Gen AI session.',
                            },
                            {
                                time: '4.00-4.30pm',
                                title: 'Career Development with IEEE by Saptarshi Ghosh.',
                            },
                            {
                                time: '4.30-4.45pm',
                                title: 'Refreshments',
                            },
                            {
                                time: '5.00-5.45pm',
                                title: 'Infinitieee and Prize Distribution.',
                            },
                        ].map((event, index) => (
                            <div key={index} className="flex justify-start gap-10">
                                <div className="flex flex-col md:flex-row items-center relative z-10">
                                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center absolute left-3">
                                        <div className="h-4 w-4 rounded-full bg-black dark:bg-neutral-800 border border-neutral-300 p-2"></div>
                                    </div>
                                    <div className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-blue-200">{event.time}</div>
                                </div>
                                <div className="relative pl-20 pr-4 w-full">
                                    <div className="md:hidden block text-lg mb-4 text-left font-[800] text-blue-200">{event.time}</div>
                                    <div>
                                        <h2 className="text-neutral-200 text-2xl md:text-3xl font-medium mb-8">{event.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
