"use client"
import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import BookCard from './components/BookCard';
import StatCard from './components/StatCard';
import SocialIcon from './components/SocialIcon';

const App = () => {
  // Mock data for the books to keep the code clean and reusable
  const newReleases = [
    {
      title: "Sabh to vadda Satguru Nanak Megh Ji Nu",
      price: "Free",
      image: "/images/new-magazines/"
    },
    {
      title: "New Book",
      price: "Free",
      image: "/images/new-magazines/"
    },
    {
      title: "Sabh to vadda Satguru Nanak Megh Ji Nu",
      price: "Free",
      image: "/images/new-magazines/"
    },
    {
      title: "New Book",
      price: "Free",
      image: "/images/new-magazines/"
    },
  ];

  const popularBooks = [{
    title: "New Book",
    price: "Free",
    image: "/image/magazines/"
  }];

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-gray-800">

      <Header />

      <div className="w-full bg-orange-400 h-64 md:h-80 lg:h-96 flex items-center justify-center">
        <span className="text-white text-lg font-medium md:text-2xl">Latest Updates</span>
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
            <StatCard count="200+" label="Books" />
            <StatCard count="100+" label="Stories" />
            <StatCard count="50+" label="Films" />
          </div>
        </section>

        {/* --- DONATION BANNER --- */}
        <section className="w-full">
          <div className="bg-[#6B6CCA] rounded-3xl p-8 md:p-12 text-center text-white shadow-lg mx-auto max-w-5xl relative overflow-hidden">
            {/* Subtle glow effect/gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">SUPPORT THE AUTHOR</h3>

              <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 text-indigo-100">
                Your small donation can help the author write and publish more books that can change the lives of many and give them a happy life.
              </p>

              <div className="bg-white text-gray-800 font-medium py-3 px-8 rounded-full shadow-md w-full max-w-md flex items-center justify-center">
                <span>BANK DETAILS: -</span>
              </div>

              <div className="mt-8 font-cursive text-3xl md:text-4xl italic opacity-90" style={{ fontFamily: '"Brush Script MT", cursive' }}>
                Thank You!
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F1115] text-white pt-16 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">

            {/* Left: Author Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
              <div className="h-32 w-32 bg-white rounded-full mb-4 mx-auto md:mx-0 relative overflow-hidden border border-green-500">
                <Image src={'/images/author_ds.jpg'} fill alt='Author' style={{ objectFit: 'cover' }}></Image>
              </div>
              <p className="font-medium text-sm tracking-wide uppercase">S. DAVINDER SINGH THAMMANWAL (HOLLAND)</p>
            </div>

            {/* Right: Links & Socials */}
            <div className="flex flex-col md:items-end w-full md:w-auto gap-8">
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-300">
                <a href="/" className="hover:text-white transition-colors">About Us</a>
                <a href="/" className="hover:text-white transition-colors">Contact Us</a>
                <a href="/" className="hover:text-white transition-colors">Donate</a>
                <a href="/" className="hover:text-white transition-colors">Complaint</a>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col items-center md:items-end">
                <span className="text-sm font-semibold mb-4 text-gray-200">Social Links</span>
                <div className="flex gap-4">
                  <SocialIcon />
                  <SocialIcon />
                  <SocialIcon />
                  <SocialIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            &copy; 2025 Guru Sahib Books - All Rights Reserved
          </div>
        </div>
      </footer>
    </div >
  );
};

export default App;