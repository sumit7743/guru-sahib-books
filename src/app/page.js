"use client"
import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import StatCard from './components/StatCard';

const App = () => {
  // Mock data for the books pointing to local /files/ directory
  // Ensure you have these actual .pdf files in your public/files/ folder
  const library = [
    { title: "Sabh to vadda Satguru Nanak Megh Ji nu ", price: 'free', status: "new", file: "/books/files/sabh_to_vadda_satguru_nanak_megh_ji_nu.pdf", image: "/books/images/sabh_to_vadda_satguru.png" },
    { title: "Tatti tavi utte baitha roop kartar da", price: 'free', status: "new", file: "/books/files/tatti_tavi_utte_baitha_roop_kartar_da.pdf", image: "/books/images/tatti_tavi_utte.png" },
    { title: "Vaisakhi", price: 'free', status: "new", file: "/books/files/visakhi_punjabi_duniya_magazine.pdf", image: "/books/images/vaisakhi.png" },
    { title: "Maa Baap", price: 'free', status: "new", file: "/books/files/maa_baap.pdf", image: "/books/images/maa_baap.png" },
  ];

  // Distribute books to categories
  const newReleases = library.filter((lib) => (lib.status === 'new')).slice(0, 5);
  const popularBooks = library.filter((lib) => (lib.status === 'popular'));

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-gray-800">

      <Header />

      <div className="w-full bg-orange-400 h-64 md:h-80 lg:h-100 text-white relative overflow-hidden">
        <Image src={'/images/hero_img.png'} fill alt='Latest Updates' style={{ objectFit: 'cover' }} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- NEW RELEASES --- */}
        <section id='new-releases'>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">New Releases</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {newReleases.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </section>

        {/* --- MOST POPULAR --- */}
        <section id='most-popular'>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">Most Popular</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10">
            {popularBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </section>

        {/* --- UPCOMING STATS --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">Upcoming...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard count="20+" label="Books" />
            <StatCard count="80+" label="Documentaries" />
            <StatCard count="3+" label="Films" />
          </div>
        </section>

        {/* --- DONATION BANNER --- */}
        <section className="w-full">
          <div className="bg-[#6B6CCA] rounded-3xl p-8 md:p-12 text-center text-white shadow-lg mx-auto max-w-5xl relative overflow-hidden">
            {/* Subtle glow effect/gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">SUPPORT THE AUTHOR</h3>

              <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 text-indigo-100">
                Your small donation can help the author write and publish more books that can change the lives of many and give them a happy life.
              </p>

              <div className="bg-white text-gray-800 font-medium py-3 px-8 rounded-full shadow-md w-full max-w-md flex items-center justify-center uppercase">
                <span>BANK DETAILS:- Available Soon!</span>
              </div>

              <div className="mt-8 font-cursive text-3xl md:text-4xl italic opacity-90" style={{ fontFamily: '"Brush Script MT", cursive' }}>
                Thank You!
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div >
  );
};

export default App;