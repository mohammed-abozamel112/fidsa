import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Lamp from "./ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function FullScreenModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<{
    title: string;
    body: string;
    services: { name: string; description: string }[];
  } | null>(null);

  const cards = [
    {
      title: "خدمات المواقع الإلكترونية",
      body: "كل ما يتعلق بالمواقع الإلكترونيه من إنشاء وتطوير موجود عندنا ",
      /* img */
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "React.js",
          description: "Build blazing fast UIs",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Next.js",
          description: "Server-side rendering with ease",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Tailwind CSS",
          description: "Stylish and responsive designs",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "API Integration",
          description: "Connect with any backend",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      title: "Digital Marketing",
      body: "Grow your business online.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "SEO",
          description: "Rank high on Google",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Google Ads",
          description: "Reach the right audience",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Content Marketing",
          description: "Engage with value",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Email Campaigns",
          description: "Reach your inbox audience",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      title: "Mobile Apps",
      body: "Cross-platform apps for iOS and Android.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "Flutter",
          description: "Single codebase for all devices",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Push Notifications",
          description: "Engage your users",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "In-App Payments",
          description: "Monetize your app",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "App Store Setup",
          description: "From dev to launch",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      title: "Brand Identity",
      body: "Make your brand stand out.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "Logo Design",
          description: "Unique and memorable",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Brand Guidelines",
          description: "Stay consistent",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Business Cards",
          description: "Leave a great impression",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Social Media Kit",
          description: "Be everywhere",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];

  const handleCardClick = (card: (typeof cards)[number]) => {
    setSelectedContent(card);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <Lamp />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                onClick={() => handleCardClick(card)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 
                transition-all cursor-pointer dark:hover:shadow-2xl 
                dark:hover:shadow-blue-400/20 w-full h-full rounded-xl p-2 group/card"
              >
                <CardItem
                  translateZ="50"
                  className="text-2xl font-semibold text-white mb-4"
                >
                  {card.title}
                </CardItem>
                <CardItem
                  translateZ="60"
                  as="p"
                  className="text-gray-300 text-sm dark:text-neutral-300"
                >
                  {card.body}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={card.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl"
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-2">
            <Dialog.Panel
              className="w-full h-[90%] bg-[#fef3d321] backdrop-blur-2xl border border-white/10 
  p-6 sm:p-10 relative overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
              >
                <XMarkIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </button>

              {selectedContent && (
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {selectedContent.title}
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {selectedContent.body}
                  </p>

                  {/* Service Cards Inside Modal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedContent.services.map((service, i) => (
                      <CardContainer key={i} className="inter-var w-full">
                        <CardBody
                          className="bg-white/5 backdrop-blur-sm border border-white/10 
                          w-full rounded-xl p-6 group/card"
                        >
                          <CardItem translateZ="100" className="w-full mt-4">
                            <img
                              src={service.image}
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <CardItem
                            translateZ="50"
                            className="text-xl font-semibold text-white mb-2"
                          >
                            {service.name}
                          </CardItem>
                          <CardItem
                            translateZ="60"
                            as="p"
                            className="text-gray-300 text-sm"
                          >
                            {service.description}
                          </CardItem>
                        </CardBody>
                      </CardContainer>
                    ))}
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
