import Image from "next/image";
const BookCard = ({ book }) => (
    <div className="flex flex-col items-center group">
        {/* Book Cover Placeholder */}
        <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-xs mb-4 flex items-end justify-center overflow-hidden relative group-hover:shadow-sm transition-shadow">
            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-300 relative">
                <Image src={book.image} fill alt='Img'></Image>
            </div>
        </div>

        {/* Action Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold py-2 px-6 rounded-full mb-3 transition-colors shadow-sm cursor-pointer">
            Read Now
        </button>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 mb-1">{book.title}</h3>

        {/* Status Badge */}
        <span className="bg-gray-300 text-gray-700 text-[10px] font-semibold py-0.5 px-4 rounded-full">
            {book.price || 'Free'}
        </span>
    </div>
);

export default BookCard;