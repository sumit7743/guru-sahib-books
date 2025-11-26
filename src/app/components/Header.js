import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 md:h-20 flex items-center justify-between md:justify-center">

                {/* Left Links */}
                <nav className="hidden md:flex justify-start space-x-8 w-1/3">
                    <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">About Us</a>
                    <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">Our Mission</a>
                </nav>

                {/* Center Logo */}
                <div className="flex-shrink-0 flex justify-start md:justify-center w-1/3 pointer-events-none md:pointer-events-auto">
                    <div className="h-12 w-12 md:h-16 md:w-16 bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto relative overflow-hidden">
                        <Link href={'/'}>
                            <Image src={'/logo/gsb_logo.png'} fill alt='Logo' />
                        </Link>
                    </div>
                </div>

                {/* Right Links */}
                <nav className="hidden md:flex justify-end space-x-8 w-1/3">
                    <a href="#new-releases" className="text-gray-700 hover:text-orange-500 font-medium">New Releases</a>
                    <a href="#most-popular" className="text-gray-700 hover:text-orange-500 font-medium">Most Popular</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open menu"
                >
                    <Menu />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2 fixed w-full">
                    <a href="/" className="block text-gray-700 hover:text-orange-500 font-medium">About Us</a>
                    <a href="/" className="block text-gray-700 hover:text-orange-500 font-medium">Our Mission</a>
                    <a href="#new-releases" className="block text-gray-700 hover:text-orange-500 font-medium">New Releases</a>
                    <a href="#most-popular" className="block text-gray-700 hover:text-orange-500 font-medium">Most Popular</a>
                </nav>
            )}
        </header>
    );
};

export default Header;