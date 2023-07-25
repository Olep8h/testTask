import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                className={`px-2 py-1 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'} ${currentPage === 1 ? '' : 'hover:bg-opacity-70'}`}
                onClick={handlePrevClick}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    className={`px-2 py-1 mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} ${page === currentPage ? '' : 'hover:bg-opacity-70'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`px-2 py-1 mx-1 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'} ${currentPage === totalPages ? '' : 'hover:bg-opacity-70'}`}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
