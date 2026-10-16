import { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Loader, Target, Eye } from "lucide-react";
import logo from "../../assets/logo.ico";
import InfoCard from "../components/infoCard";
import { useAboutPage } from "../hooks/useAboutPage";

export default function About() {
    const { data: aboutData, isLoading, isError, error } = useAboutPage();

    useEffect(() => {
        if (isError) {
            console.error("Failed to load About Page data from API:", error);
        }
    }, [isError, error]);

    if (isLoading) {
        return (
            // --- BACKGROUND CHANGED HERE ---
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#A5D8F0] to-[#E0F7FA]">
                <div className="text-center text-slate-700">
                    <Loader className="w-16 h-16 animate-spin mx-auto mb-4" />
                    <p className="text-2xl font-semibold">Loading Page...</p>
                </div>
            </div>
        );
    }

    const fallbackData = {
        storyAndMission: {
            story: `hey hey I am Shweta Undre, founder of Smiles World. Though my degree says I am an engineer, my heart has always belonged to the world of travel.\n\nMy passion for exploring began in school—by the time I was in 10th standard, my father had already shown me almost the entire India. Those journeys left a mark on me forever. The thrill of discovering new cultures, the joy of tasting different cuisines, and the sheer magic of a sunrise or sunset—these experiences shaped my dreams.\n\nYet, I went on to complete my engineering degree and stepped into a corporate job. But deep inside, I always knew something was missing. That wasn’t the work that set my soul on fire.\n\nA break to become a mother gave me clarity. I pursued an MBA in Tourism and co-founded my first venture, Smiles Holidays. For 12 fulfilling years, we served over 10,000 happy travelers, earning their trust and love.\n\nWith the same vision and deeper conviction, I founded Smiles World—a brand built on passion, trust, and the promise of creating unforgettable travel experiences that stay with you long after the journey ends.`,
            mission: {
                text: "Our mission is to transform travel dreams into seamless, personalized experiences filled with joy, discovery, and unforgettable moments.",
            },
        },
        ourMembers: {
            cards: [
                { name: "Sarah Adventure", designation: "Founder & Lead Explorer", information: "15+ years of travel experience across 40+ countries.", imageUrl: null },
                { name: "Maya Wanderer", designation: "Women's Travel Specialist", information: "Expert in women-only travel programs and safety protocols.", imageUrl: null },
                { name: "Arjun Guide", designation: "Cultural Experience Director", information: "Local heritage expert with deep knowledge of Indian culture.", imageUrl: null }
            ],
        },
        journeyInNumbers: {
            cards: [
                { value: "5000+" }, { value: "150+" }, { value: "500+" }, { value: "98%" }
            ],
        },
    };
    
    const visionText = "Our vision is to create a global community of happy travelers by delivering innovative, personalized, and memorable journeys.";
    
    const content = !isError && aboutData ? aboutData : fallbackData;
    
    const journeyStats = [
        { label: "Happy Travelers" }, { label: "Destinations" },
        { label: "Successful Trips" }, { label: "Satisfaction Rate" },
    ];
    
    const memberIcons = ["🧭", "🌸", "🎭"];

    return (
        // --- BACKGROUND CHANGED HERE ---
        <div className="bg-gradient-to-br from-[#FDE047] to-[#FDBA74] -mt-16">
            
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        {/* Text colors updated for better contrast */}
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800">About Smiles World</h1>
                        <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
                            We believe travel is more than just visiting places – it's about creating connections, discovering cultures, and collecting smiles along the way.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-2">
                            {/* Card colors updated for new theme */}
                            <div className="aspect-square bg-gradient-to-br from-[#FDE047] to-[#FDBA74] rounded-3xl shadow-lg shadow-cyan-500/20 flex flex-col items-center justify-center text-center p-8">
                                <User className="w-24 h-24 text-blue-800/50" strokeWidth={1} />
                                <p className="mt-4 text-xl font-medium text-blue-900">Shweta Undre</p>
                                <p className="text-sm text-blue-800/80">Founder, Smiles World</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                            <h2 className="text-4xl font-bold text-slate-800 mb-8">A Note From Our Founder ✍️</h2>
                            <div className="space-y-5 text-slate-600 leading-relaxed text-justify">
                                <p className="text-slate-600 leading-relaxed text-justify whitespace-pre-line">{content.storyAndMission.story}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="p-10 text-center bg-white rounded-3xl shadow-lg h-full">
                            <div className="mb-5 flex justify-center">
                                <Target className="w-12 h-12 text-blue-500" />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-800 mb-4">Our Mission</h3>
                            <p className="text-xl text-slate-600">{content.storyAndMission.mission.text}</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="p-10 text-center bg-white rounded-3xl shadow-lg h-full">
                            <div className="mb-5 flex justify-center">
                                <Eye className="w-12 h-12 text-cyan-500" />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-800 mb-4">Our Vision</h3>
                            <p className="text-xl text-slate-600">{visionText}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Values ✨</h2>
                        <p className="text-xl text-slate-600">The principles that guide every journey we create</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { emoji: "💖", title: "Customer Delight", description: "We go the extra mile to ensure every journey is filled with comfort, joy, and smiles." },
                            { emoji: "⭐", title: "Authenticity", description: "We believe in offering real experiences that connect travelers with the true essence of a destination." },
                            { emoji: "🤝", title: "Trust & Transparency", description: "We build lasting relationships through honest advice, seamless planning, and reliable service." },
                            { emoji: "💡", title: "Innovation", description: "We embrace new ideas and technologies to craft modern, personalized travel solutions." },
                            { emoji: "🌱", title: "Care & Responsibility", description: "We promote ethical travel, safety, and sustainable practices that respect communities and nature." },
                            { emoji: "👥", title: "Teamwork & Passion", description: "Our strength lies in a dedicated team driven by the love for travel and creating unforgettable experiences." },
                        ].map((value, index) => (
                            <InfoCard key={index} delay={index * 0.1} icon={value.emoji} title={value.title} description={<p>{value.description}</p>} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Meet Our Team 👥</h2>
                        <p className="text-xl text-slate-600">Passionate travelers dedicated to making your journey extraordinary</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.ourMembers.cards.map((member, index) => (
                            <InfoCard
                                key={member.memberId || index}
                                delay={index * 0.2}
                                icon={ member.imageUrl ? (<img src={member.imageUrl} alt={member.name} className="w-20 h-20 object-cover rounded-full mx-auto" />) : (memberIcons[index] || "👤")}
                                title={member.name}
                                description={
                                    <>
                                        <p className="text-blue-700 font-medium mb-4 text-sm">{member.designation}</p>
                                        <p className="text-xs">{member.information}</p>
                                    </>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Journey in Numbers 📊</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {journeyStats.map((stat, index) => (
                            <motion.div key={index} className="text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                                    {content.journeyInNumbers.cards[index]?.value}
                                </div>
                                <div className="text-slate-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}