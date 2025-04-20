import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Lamp from "./ui/lamp";
import { Box } from "lucide-react";


export default function FullScreenModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<{
    title: string;
    body: string;
  } | null>(null);

  const cards = [
    {
      title: "The best AI code editor ever.",
      body: "Yes, it's true. I'm not even kidding...",
    },
    {
      title: "You should buy Aceternity UI Pro",
      body: "It's the best money you'll ever spend",
    },
    {
      title: "Built by Cursor",
      body: "I'm not even kidding. Ask my mom...",
    },
    {
      title: "Coming soon on Aceternity UI",
      body: "I'm writing the code as I record this",
    },
  ];

  const handleCardClick = (card: { title: string; body: string }) => {
    setSelectedContent(card);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* <h2 className="text-4xl font-bold text-center text-white mb-12">
          <SparklesIcon className="h-12 w-12 inline-block mr-2 text-yellow-400" />
          خدماتنا
        </h2> */}
        <Lamp />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10
              hover:border-blue-400/50 transition-all cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h2>
              <p className="text-gray-300">{card.body}</p>
  
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Modal - Only opens when card is clicked */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed h-full inset-0 bg-black/50 backdrop-blur-xl"
          aria-hidden="true"
        />

        <div className="fixed h-full inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4">
            <Dialog.Panel
              className="w-full h-full bg-[#fef3d321] backdrop-blur-2xl
              border border-white/10 rounded-none p-12 relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full"
              >
                <XMarkIcon className="h-8 w-8 text-white" />
              </button>

              <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
                {selectedContent && (
                  <>
                    <Dialog.Title className="text-4xl font-bold text-white mb-8">
                      {selectedContent.title}
                    </Dialog.Title>

                    <div className="space-y-6 text-gray-300 text-lg">
                      <p>{selectedContent.body}</p>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Feature Highlights
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Context-aware AI suggestions</li>
                          <li>Real-time collaboration</li>
                          <li>Integrated documentation</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
