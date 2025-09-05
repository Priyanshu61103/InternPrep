import React, { useRef, useState} from 'react'

const ResumeChecker = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        processFile(file);
    };

    const processFile = (file) => {
        if (file) {
            // Validate file type
            const allowedTypes = ['.doc', '.docx', '.pdf'];
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

            if (!allowedTypes.includes(fileExtension)) {
                alert('Please upload only PDF, DOC, or DOCX files.');
                return;
            }

            // Validate file size (2MB limit)
            const maxSize = 2 * 1024 * 1024; // 2MB in bytes
            if (file.size > maxSize) {
                alert('File size should be less than 2MB.');
                return;
            }

            setSelectedFile(file);
            console.log('Selected file:', file);
            // Handle file upload logic here
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            processFile(files[0]);
        }
    };

    return (
        <div
            className='max-w-4/5 mx-auto max-h-full bg-white rounded-2xl shadow-2xl p-4 backdrop-blur-sm bg-opacity-95 mt-4 pt-2'>
            <div className='w-3/5'>
                <h1 className='flex flex-col gap-14 mx-2'>
                    <span className='text-7xl text-gray-900 font-medium text-left'>Is your resume good enough?</span>
                    <p className=''>A free and fast AI resume checker doing 16 crucial checks to ensure your resume is
                        ready
                        to perform and get you interview callbacks.</p>
                </h1>
                <div className="p-4 pt-7 max-w-2xl mx-auto">
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".doc,.docx,.pdf"
                        onChange={handleFileChange}
                    />

                    <div
                        className={` mt-7 cursor-pointer transition-all duration-200 ${
                            isDragOver ? 'scale-105' : ''
                        }`}
                        onClick={handleFileSelect}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className={`border-2 border-dashed transition-colors duration-200 pt-6 pb-6 pl-5 pr-5 sm:pl-2 sm:pr-2 rounded-lg ${
                            isDragOver
                                ? 'border-blue-400 bg-blue-50'
                                : selectedFile
                                    ? 'border-green-400 bg-green-50'
                                    : 'border-gray-300 hover:border-gray-400'
                        }`}>
                            <div className="text-center">
                                {selectedFile ? (
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-green-600 font-medium">{selectedFile.name}</p>
                                        <p className="text-xs text-gray-500">File uploaded successfully</p>
                                    </div>
                                ) : (
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-3">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </div>
                                        <p className="text-center mb-2 text-sm text-gray-600">
                                            Drop your resume here or choose a file.
                                            <br className="sm:hidden" />
                                            PDF &amp; DOCX only. Max 2MB file size.
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    {selectedFile ? 'Change File' : 'Upload Your Resume'}
                                </button>
                            </div>

                            <div className="flex justify-center items-center mt-4">
                                <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-gray-500 font-bold">
              Privacy guaranteed
            </span>
                            </div>
                        </div>
                    </div>

                    {selectedFile && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-gray-900 mb-2">File Details:</h3>
                            <p className="text-sm text-gray-600">Name: {selectedFile.name}</p>
                            <p className="text-sm text-gray-600">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            <p className="text-sm text-gray-600">Type: {selectedFile.type}</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}
export default ResumeChecker
