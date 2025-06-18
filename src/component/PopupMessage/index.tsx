import React from 'react';

interface PopupMessageProps {
    show: boolean;
    onClose: () => void;
    title: string;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
    imageUrl?: string;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
    show,
    onClose,
    title,
    message,
    buttonText,
    onButtonClick,
    imageUrl,
}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 text-center w-[350px] relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-[5px] -right-[5px] bg-[#2A497C] w-[25px] h-[25px] rounded-full flex items-center justify-center text-white"
                >
                    ×
                </button>


                {/* Optional image */}
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="alert"
                        className="mx-auto mb-4 h-20"
                    />
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-[#4a00e0] mb-2">{title}</h2>

                {/* Message */}
                <p className="text-gray-700 mb-4">{message}</p>

                {/* Action button */}
                <button
                    onClick={onButtonClick}
                    className="bg-[#4a00e0] text-white px-6 py-2 rounded-full hover:bg-[#3500b3]"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PopupMessage;
