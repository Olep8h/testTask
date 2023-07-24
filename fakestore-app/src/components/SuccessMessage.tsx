import React, { useEffect } from 'react';

interface SuccessMessageProps {
    message: string;
    onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return (
        <div>{message}</div>
    );
};

export default SuccessMessage;
