import Image from "next/image";
const Header = () => (
    <header className="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between md:justify-center">

            {/* Left Links */}
            <nav className="hidden md:flex justify-start space-x-8 w-1/3">
                <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">About Us</a>
                <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">Our Mission</a>
            </nav>

            {/* Center Logo - Orange Circle Placeholder */}
            <div className="flex-shrink-0 flex justify-start md:justify-center w-1/3 pointer-events-none md:pointer-events-auto">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto relative overflow-hidden">
                    {/* Logo content would go here */}
                    <Image src={'/logo/gsb_logo.png'} fill alt='Logo'></Image>
                </div>
            </div>

            {/* Right Links */}
            <nav className="hidden md:flex justify-end space-x-8 w-1/3">
                <a href="#new-releases" className="text-gray-700 hover:text-orange-500 font-medium">New Releases</a>
                <a href="#most-popular" className="text-gray-700 hover:text-orange-500 font-medium">Most Popular</a>
            </nav>

            {/* Mobile Menu Button (Hamburger placeholder) */}
            <button className="md:hidden p-2 text-gray-600">
                <span className="block w-6 h-0.5 bg-current mb-1"></span>
                <span className="block w-6 h-0.5 bg-current mb-1"></span>
                <span className="block w-6 h-0.5 bg-current"></span>
            </button>
        </div>
    </header >
);

export default Header;

