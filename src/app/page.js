"use client"
import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import StatCard from './components/StatCard';

const App = () => {
  const library = [
    {
      title: "Put ta saray mawan de hi han",
      price: 'free',
      status: "new",
      file: "/books/files/put_ta_saray_mawan_de_hi_han.pdf",
      image: "/books/images/put_ta_saray_mawan_de_hi_han.png"
    },
    {
      title: "Swachh Bharat",
      price: 'free',
      status: "new",
      file: "/books/files/swachh_bharat_punjabi.pdf",
      image: "/books/images/swachh_bharat_punjabi.png"
    },
    {
      title: "Swachh Bharat (Hindi Version)",
      price: 'free',
      status: "new",
      file: "/books/files/swachh_bharat_hindi.pdf",
      image: "/books/images/swachh_bharat_hindi.png"
    },
    {
      title: "Swachh Bharat (English Version)",
      price: 'free',
      status: "new",
      file: "/books/files/swachh_bharat_english.pdf",
      image: "/books/images/swachh_bharat_english.png"
    },
    {
      title: "Dithe Sabhe Thaav",
      price: 'free',
      status: "new",
      file: "/books/files/dithe_sabhe_thaav.pdf",
      image: "/books/images/dithe_sabhe_thaav.png"
    },
    {
      title: "Dithe Sabhe Thaav (Hindi Version)",
      price: 'free',
      status: "new",
      file: "/books/files/dithe_sabhe_thaav_hindi.pdf",
      image: "/books/images/dithe_sabhe_thaav.png"
    },
    {
      title: "Dithe Sabhe Thaav (English Version)",
      price: 'free',
      status: "new",
      file: "/books/files/dithe_sabhe_thaav_english.pdf",
      image: "/books/images/dithe_sabhe_thaav.png"
    },
    {
      title: "Sabh to vadda Satguru Nanak Megh Ji nu",
      price: 'free',
      status: "new",
      file: "/books/files/sabh_to_vadda_satguru_nanak_megh_ji_nu.pdf",
      image: "/books/images/sabh_to_vadda_satguru.png"
    },
    {
      title: "Tatti tavi utte baitha roop kartar da",
      price: 'free',
      status: "popular",
      file: "/books/files/tatti_tavi_utte_baitha_roop_kartar_da.pdf",
      image: "/books/images/tatti_tavi_utte.png"
    },
    {
      title: "Vaisakhi",
      price: 'free',
      status: "popular",
      file: "/books/files/visakhi_punjabi_duniya_magazine.pdf",
      image: "/books/images/vaisakhi.png"
    },
    {
      title: "Maa Baap",
      price: 'free',
      status: "popular",
      file: "/books/files/maa_baap.pdf",
      image: "/books/images/maa_baap.png"
    },

    // --- Populars ---
    { title: "Eh Janam Tumare Lekhe", price: 'free', status: "popular", file: "/books/files/Eh_Janam_Tumare_Lekhe.pdf", image: "/books/images/Eh_Janam_Tumare_Lekhe.png" },
    { title: "Guru Nanak Gurdwara Amesterdam", price: 'free', status: "popular", file: "/books/files/guru_nanak_Gurdwara_Amesterdam.pdf", image: "/books/images/guru_nanak_Gurdwara_Amesterdam.png" },
    { title: "Guru Teg Bhadar Sahib", price: 'free', status: "popular", file: "/books/files/Guru_Teg_Bhadar_Sahib.pdf", image: "/books/images/Guru_Teg_Bhadar_Sahib.png" },
    { title: "Kisan Khudkhushiyan Kive Rukan", price: 'free', status: "popular", file: "/books/files/kisan_khudkhushiyan_kive_rukan.pdf", image: "/books/images/kisan_khudkhushiyan_kive_rukan.png" },
    { title: "Mitar Piyare Nu", price: 'free', status: "popular", file: "/books/files/Mitar_Piyare_Nu.pdf", image: "/books/images/Mitar_Piyare_Nu.png" },
    { title: "Nasha Mukt Punjab", price: 'free', status: "popular", file: "/books/files/Nasha_Mukt_Punjab.pdf", image: "/books/images/Nasha_Mukt_Punjab.png" },
    { title: "Pawan Guru Pani Pita", price: 'free', status: "popular", file: "/books/files/Pawan_Guru_Pani_Pita.pdf", image: "/books/images/Pawan_Guru_Pani_Pita.png" },
    { title: "Qaum Tarakki Kiven Kare", price: 'free', status: "popular", file: "/books/files/Qaum_Tarakki_Kiven_Kare.pdf", image: "/books/images/Qaum_Tarakki_Kiven_Kare.png" },
    { title: "Rangla Punjab", price: 'free', status: "popular", file: "/books/files/Rangla_Punjab.pdf", image: "/books/images/Rangla_Punjab.png" },
    { title: "Satguru Nanak Pargatia", price: 'free', status: "popular", file: "/books/files/Satguru_Nanak_Pargatia.pdf", image: "/books/images/Satguru_Nanak_Pargatia.png" },
    { title: "Vaho Vaho Godind Singh", price: 'free', status: "popular", file: "/books/files/Vaho_Vaho_Godind_Singh.pdf", image: "/books/images/Vaho_Vaho_Godind_Singh.png" },
    { title: "Videya Di Chardi Kala Kiven Hove", price: 'free', status: "popular", file: "/books/files/Videya_Di_Chardi_Kala_Kiven_hove.pdf", image: "/books/images/Videya_Di_Chardi_Kala_Kiven_hove.png" },
    { title: "Aesi Lal Tudh Bin Kaun Kare", price: 'free', status: "popular", file: "/books/files/Aesi_Lal_Tudh_Bin_kaun_kare.pdf", image: "/books/images/Aesi_Lal_Tudh_Bin_kaun_kare.png" },
    { title: "Anmol Punjabi Khazana", price: 'free', status: "popular", file: "/books/files/anmol_punjabi_khazana.pdf", image: "/books/images/anmol_punjabi_khazana.png" },
    { title: "Bhai Laal Chand Di Dhaal", price: 'free', status: "popular", file: "/books/files/bhai_laal_chand_di_dhaal.pdf", image: "/books/images/bhai_laal_chand_di_dhaal.png" },
    { title: "Guru Har Krishan Ji", price: 'free', status: "popular", file: "/books/files/Guru_Har_Krishan_ji.pdf", image: "/books/images/Guru_Har_Krishan_ji.png" },
    { title: "Dil Di Awaz", price: 'free', status: "popular", file: "/books/files/Dil_Di_Awaz.pdf", image: "/books/images/Dil_Di_Awaz.png" },
  ];

  const newReleases = library.filter((lib) => (lib.status === 'new'));

  // "Most Popular" takes everything else
  const popularBooks = library.filter((lib) => (lib.status === 'popular'));

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-gray-800">

      <Header />

      <div className="w-full bg-orange-400 h-64 md:h-80 lg:h-130 text-white relative overflow-hidden">
        {/* Make sure this hero image path is correct in your public folder */}
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
        <section id='donate' className="w-full">
          <div className="bg-[#6B6CCA] rounded-3xl p-8 md:p-12 text-center text-white shadow-lg mx-auto max-w-5xl relative overflow-hidden">
            {/* Subtle glow effect/gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

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