import { lazy, Suspense, useMemo } from 'react';
import { TypingEffect } from '../components/TypingEffect';
import { CircleLoader } from 'react-spinners';
import profile from '../assets/profile.png';

const SocialMediaSection = lazy(() => import('../components/SocialMediaSection'));

const Home = () => {

    const loader = useMemo(() => (
        <div className="flex justify-center items-center h-screen">
            <CircleLoader color="#000" loading size={50} speedMultiplier={1} />
            <span className="sr-only">Loading Home...</span>
        </div>
    ), []);

    return (
        <div className="font-sans antialiased max-w-4xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8" aria-label="Home Page">
            <section id='hero' className="mb-container">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                        {/* Text Content */}
                        <div className="order-2 md:order-1 text-left w-full">
                            <div className="staggered-fade-in">
                                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                                    <TypingEffect text="Hi, I'm Ishant" />
                                </h1>

                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                                    Passionate{" "}
                                    <span className="text-indigo-600 relative">Full Stack Developer</span>
                                </h3>

                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed  max-w-2xl mx-auto md:mx-0 tracking-wide">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                                        Crafting seamless digital experiences
                                    </span>{" "}
                                    with modern web technologies. Let&apos;s collaborate to transform your ideas into{" "}
                                    <span className="relative inline-block">
                                        <span className="underline decoration-indigo-400 decoration-wavy">scalable solutions</span>
                                    </span>.
                                </p>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="order-1 md:order-2 w-full md:w-1/2 flex sm:justify-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 group staggered-fade-in delay-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full transform rotate-12 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <img
                                    src={profile}
                                    alt="Ishant Somani - Full Stack Developer"
                                    className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="mb-container">
                <div className="staggered-fade-in">
                    <h2>About</h2>
                </div>

                <div className="staggered-fade-in">
                    <div className="prose prose-lg text-gray-600 space-y-6 tracking-wide">
                        <strong className='text-lg'>Namaste!</strong> I&apos;m a <strong>final-year BCA student</strong> from <strong>Sangam University</strong> and a <strong>Full stack developer</strong> passionate about blending code with creativity. I specialize in <strong>user-friendly web applications</strong> with <strong>AI tools</strong> to <strong>simplify development</strong>, <strong>reduce time</strong>, and <strong>enhance UI/UX</strong>. Beyond coding, I thrive on <strong>leadership</strong> - organizing <strong>5+ university events</strong> and <strong>coordinating my team</strong> to secure a <strong>top-10 position in two hackathons</strong>. <strong>Learning new things</strong> is just a way of life for me, and I&apos;m addicted to trends around AI, tech tutorials, and collaborative projects. Let&apos;s connect over <strong>chai pe charcha</strong> for a lively discussion! 🚀
                    </div>
                </div>
            </section>

            <Suspense fallback={loader}>
                <SocialMediaSection />
            </Suspense>

        </div>
    );
};

export default Home;