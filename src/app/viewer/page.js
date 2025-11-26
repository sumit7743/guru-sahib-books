"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, AlertCircle } from 'lucide-react';

// We split the content into a sub-component to safely use useSearchParams within a Suspense boundary
const ViewerContent = () => {
    const searchParams = useSearchParams();
    const fileUrl = searchParams.get('file');
    const title = searchParams.get('title') || 'Document Viewer';

    if (!fileUrl) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
                <AlertCircle size={48} className="mb-4 text-red-400" />
                <p className="text-lg">No file specified.</p>
                <Link href="/" className="mt-4 text-orange-500 hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[90vh]">
            {/* Viewer Header */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md z-10">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="p-2 hover:bg-gray-800 rounded-full transition-colors" title="Back">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-lg font-medium truncate max-w-[200px] md:max-w-md" title={title}>
                        {title}
                    </h1>
                </div>

                <a
                    href={fileUrl}
                    download
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                    <Download size={16} />
                    <span className="hidden sm:inline">Download PDF</span>
                </a>
            </div>

            {/* PDF Iframe */}
            <div className="flex-1 bg-gray-100 relative">
                <iframe
                    src={`${fileUrl}#toolbar=0`}
                    className="w-full h-full border-none"
                    title="PDF Viewer"
                >
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                        <p className="mb-4">Your browser does not support viewing PDFs inline.</p>
                        <a href={fileUrl} className="text-blue-600 underline">Download the PDF to view it.</a>
                    </div>
                </iframe>
            </div>
        </div>
    );
};

const ViewerPage = () => {
    return (
        <div className="min-h-screen bg-[#F2F2F2] p-4 md:p-8 font-sans">
            <Suspense fallback={<div className="text-center p-10">Loading Viewer...</div>}>
                <ViewerContent />
            </Suspense>
        </div>
    );
};

export default ViewerPage;