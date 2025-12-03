"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Globe, Award, Heart, MapPin, Mail, Phone } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#F2F2F2] font-sans text-gray-800">
            <Header />

            {/* --- HERO SECTION --- */}
            <div className="w-full bg-orange-400 h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
                {/* Optional: Add a subtle pattern or hero image here if available */}
                <div className="text-center z-10 text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">About the Author</h1>
                    <p className="text-lg md:text-xl font-light opacity-90">S. Davinder Singh Rattu Thammanwal (Holland)</p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 -mt-20 relative z-20">

                {/* --- MAIN PROFILE CARD --- */}
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Image Section */}
                        <div className="md:w-1/3 bg-gray-100 relative min-h-[400px]">
                            {/* Using the author image referenced in your footer */}
                            <Image
                                src="/images/author_ds.jpg"
                                fill
                                alt="S. Davinder Singh Rattu"
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Bio Content */}
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-orange-500 font-semibold uppercase tracking-wider text-sm mb-2">
                                <BookOpen size={16} />
                                <span>Author & Social Reformer</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                S. Davinder Singh Rattu
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                Born on <strong>January 18, 1955</strong>, in the village of Thammanwal (Jalandhar, Punjab), S. Davinder Singh Rattu is a prolific author and dedicated social reformer currently based in Bergen op Zoom, Netherlands.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                With a deep commitment to moral upliftment and public welfare, he has authored more than <strong>260 books</strong>. His works focus on guiding individuals and communities towards a disciplined, hygienic, and spiritually aligned way of living.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 text-gray-700">
                                    <MapPin className="text-orange-400 mt-1 shrink-0" size={20} />
                                    <span>
                                        <strong className="block text-gray-900 text-sm">Residing In</strong>
                                        Bergen op Zoom, Netherlands
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 text-gray-700">
                                    <Award className="text-orange-400 mt-1 shrink-0" size={20} />
                                    <span>
                                        <strong className="block text-gray-900 text-sm">Education</strong>
                                        Bachelor of Arts (B.A.)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- KEY STATISTICS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatBox icon={<BookOpen size={32} />} value="260+" label="Books Written" />
                    <StatBox icon={<Globe size={32} />} value="5" label="Languages Known" subtext="(Punjabi, Hindi, English, Dutch, Bhojpuri)" />
                    <StatBox icon={<Heart size={32} />} value="Global" label="Community Impact" subtext="India & Europe" />
                </div>

                {/* --- FOCUS AREAS --- */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Areas of Focus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FocusCard title="Swachh Bharat" desc="Promoting national cleanliness and hygiene awareness." />
                        <FocusCard title="Spiritual Growth" desc="Literature focused on religious and spiritual connection." />
                        <FocusCard title="Lifestyle" desc="Improving public health and daily living standards." />
                        <FocusCard title="Social Reform" desc="Community upliftment and moral awareness initiatives." />
                    </div>
                </section>

                {/* --- CONTACT & DECLARATION --- */}
                <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Netherlands</p>
                                    <p className="font-medium">+31 615523439</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">India</p>
                                    <p className="font-medium">+91 9041663349</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">davins@live.nl</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">A Message from the Author</h3>
                            <p className="italic text-gray-600">
                                "Works focus on guiding individuals and communities towards a disciplined, hygienic and spiritually aligned way of living."
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <Link href="/" className="text-orange-500 font-medium hover:text-orange-600 text-sm">
                                    Read Books &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

// --- Sub Components for this page ---

const StatBox = ({ icon, value, label, subtext }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
        <div className="text-orange-400 mb-3">{icon}</div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="font-medium text-gray-700">{label}</div>
        {subtext && <div className="text-xs text-gray-500 mt-1">{subtext}</div>}
    </div>
);

const FocusCard = ({ title, desc }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs hover:border-orange-200 transition-colors">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default AboutPage;