import React from "react";

interface CardProps {
    title: string;
    content: string;
    tags: string[];
    dateAdded: string;
    onClick: () => void;
}

const Keepcard: React.FC<CardProps> = ({ title, content, tags, dateAdded, onClick }) => {
    return (
        <div
            className="w-full max-w-sm p-4 bg-white shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{content}</p>
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
            <p className="text-xs text-gray-400 mt-4">Added on {dateAdded}</p>
        </div>
    );
};

export default Keepcard;
