import React from 'react';

type SuccessMessageProps = {
    message: string;
    onClose: () => void;
    isProductAdded?: boolean;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose, isProductAdded }) => {
    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow">
            <p>{message}</p>
            <button className="mt-2" onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default SuccessMessage;
