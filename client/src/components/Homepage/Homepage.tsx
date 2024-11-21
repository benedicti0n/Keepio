import React, { useState } from "react";
import KeepCard from "../Keeps/Keepcard";
import KeepModal from "../Keeps/KeepModal";
import { FiTwitter, FiVideo, FiFolder, FiLink, FiTag } from "react-icons/fi";
import { MdShare, MdAdd } from "react-icons/md"; // Icons for buttons
import Button from "../../ui/Button";

const Homepage: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<null | {
        title: string;
        content: string;
        tags: string[];
        dateAdded: string;
    }>(null);

    const cards = [
        {
            title: "Project Ideas",
            content: "Future Projects: Build a knowledge base, habit tracker, and more.",
            tags: ["productivity", "ideas"],
            dateAdded: "10/03/2024",
        },
        {
            title: "How to Build a Second Brain",
            content: "A guide to managing your thoughts and knowledge effectively.",
            tags: ["productivity", "learning"],
            dateAdded: "09/03/2024",
        },
        {
            title: "Productivity Tip",
            content:
                "Learn to build in public. Share your progress, get feedback, and grow.",
            tags: ["productivity", "learning"],
            dateAdded: "08/03/2024",
        },
    ];

    return (
        <div className="h-screen w-full flex">
            {/* Sidebar */}
            <aside className="w-64 p-4 bg-gray-50 border-r border-gray-200">
                <ul className="space-y-6 text-gray-700">
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#1DA1F2]">
                        <FiTwitter size={20} />
                        Tweets
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#FF0000]">
                        <FiVideo size={20} />
                        Videos
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#FFC107]">
                        <FiFolder size={20} />
                        Documents
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#0077B5]">
                        <FiLink size={20} />
                        Links
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#009688]">
                        <FiTag size={20} />
                        Tags
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Header Buttons */}
                <div className="flex justify-between md:items-center flex-col md:flex-row mb-8">
                    <h1 className="text-2xl font-semibold mb-4 md:mb-0">Dashboard</h1>
                    <div className="flex gap-4">
                        <Button variant="passive" className="flex items-center gap-2">
                            <MdShare size={18} />
                            Share Brain
                        </Button>
                        <Button variant="normal" className="flex items-center gap-2">
                            <MdAdd size={18} />
                            Add Content
                        </Button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <KeepCard
                            key={index}
                            title={card.title}
                            content={card.content}
                            tags={card.tags}
                            dateAdded={card.dateAdded}
                            onClick={() => setSelectedCard(card)}
                        />
                    ))}
                </div>
            </main>

            {/* Modal */}
            {selectedCard && (
                <KeepModal
                    title={selectedCard.title}
                    content={selectedCard.content}
                    tags={selectedCard.tags}
                    dateAdded={selectedCard.dateAdded}
                    onClose={() => setSelectedCard(null)}
                />
            )}
        </div>
    );
};

export default Homepage;
