import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const BookCard = ({ book }) => {
    // Construct the URL for the viewer page
    // We encode the file path and title to ensure they are valid URL parameters
    const viewerUrl = `/viewer?file=${encodeURIComponent(book.file || '')}&title=${encodeURIComponent(book.title || 'Book')}`;

    return (
        <div className="flex flex-col items-center group">
            {/* Book Cover Placeholder */}
            <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-xs mb-4 flex items-end justify-center overflow-hidden relative group-hover:shadow-sm transition-shadow">
                <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-300 relative">
                    {/* Next.js Image Component with Fill */}
                    {book.image ? (
                        <Image
                            src={book.image}
                            fill
                            alt={book.title || 'Book Cover'}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <span className="text-4xl opacity-20">📖</span>
                    )}
                </div>
            </div>

            {/* Action Button - Wrapped in Link to open the PDF Viewer */}
            <Link href={viewerUrl} className="mb-3 w-auto">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold py-2 px-6 rounded-full transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    Read Now
                </button>
            </Link>

            {/* Title */}
            <h3 className="text-sm font-medium text-gray-800 mb-1 capitalize text-center line-clamp-2">
                {book.title}
            </h3>

            {/* Status Badge */}
            <span className="bg-gray-300 text-gray-700 text-[10px] font-semibold py-0.5 px-4 rounded-full capitalize">
                {/* Fallback to 'Free' if neither status nor price is defined */}
                {book.price || 'Free'}
            </span>
        </div>
    );
};

export default BookCard;