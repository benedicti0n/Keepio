import React from "react";

interface CardModalProps {
    title: string;
    content: string;
    tags: string[];
    dateAdded: string;
    onClose: () => void;
}

const KeepModal: React.FC<CardModalProps> = ({ title, content, tags, dateAdded, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-600 mt-4">{content}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">Added on {dateAdded}</p>
            </div>
        </div>
    );
};

export default KeepModal;
