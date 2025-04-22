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
      body: "كل ما يتعلق بالمواقع الإلكترونيه من إنشاء وتطوير موجود عندنا",
      /* img */
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "React.js",
          description: "Build blazing fast UIs",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp:
            "https://wa.me/966530030468?text=بتواصل معك بخصوص خدمة إنشاء المواقع الإلكترونية",
        },
        {
          name: "Next.js",
          description: "Server-side rendering with ease",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Tailwind CSS",
          description: "Stylish and responsive designs",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "API Integration",
          description: "Connect with any backend",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
      ],
    },
    {
      title: "الخدمات التسويقية",
      body: "Grow your business online.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "SEO",
          description: "Rank high on Google",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Google Ads",
          description: "Reach the right audience",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Content Marketing",
          description: "Engage with value",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Email Campaigns",
          description: "Reach your inbox audience",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
      ],
    },
    {
      title: "خدمات التصميم والتصوير",
      body: "Cross-platform apps for iOS and Android.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "Flutter",
          description: "Single codebase for all devices",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Push Notifications",
          description: "Engage your users",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "In-App Payments",
          description: "Monetize your app",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "App Store Setup",
          description: "From dev to launch",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
      ],
    },
    {
      title: "إدارة الحسابات",
      body: "Make your brand stand out.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          name: "Logo Design",
          description: "Unique and memorable",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Brand Guidelines",
          description: "Stay consistent",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Business Cards",
          description: "Leave a great impression",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
        {
          name: "Social Media Kit",
          description: "Be everywhere",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          whatsapp: "https://wa.me/966530030468?text=text_of_message_here",
        },
      ],
    },
  ];

  const handleCardClick = (card: (typeof cards)[number]) => {
    setSelectedContent(card);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-6 sm:p-8" id="services">
      <div className="max-w-7xl mx-auto space-y-12">
        <Lamp />

        {/* Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-2">
          {cards.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                onClick={() => handleCardClick(card)}
                className="bg-[#85190e] backdrop-blur-sm border border-white/10 hover:border-blue-400/50 
                transition-all cursor-pointer dark:hover:shadow-2xl 
                dark:hover:shadow-blue-400/20 w-full h-full rounded-xl p-2 group/card text-center"
              >
                <CardItem translateZ="100" className="w-full mt-4">
                  <img loading="lazy"
                    src={card.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-semibold text-white mb-4 text-center"
                >
                  {card.title}
                </CardItem>
                <CardItem
                  translateZ="60"
                  as="p"
                  className="text-gray-300 text-sm dark:text-neutral-300 text-center"
                >
                  {card.body}
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
          className="fixed inset-0 bg-transparent backdrop-blur-xl"
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full py-0 items-center justify-center px-4 sm:px-2">
            <Dialog.Panel
              className="w-[85%] h-100% py-0 px-5 bg-transparent backdrop-blur-2xl border border-white/10 
  p-6 sm:p-10 relative overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
              >
                <XMarkIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white text" />
              </button>

              {selectedContent && (
                <div className="space-y-6 text-center py-12">
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
                          w-full rounded-xl p-6 group/card lg:flex flg:lex-row lg:items-center"
                        >
                          <CardItem
                            translateZ="50"
                            className="text-xl font-semibold text-white text-center lg:text-right px-0 lg:px-2"
                          >
                            {service.name}
                            <CardItem
                              translateZ="60"
                              as="p"
                              className="text-gray-300 text-sm text-center lg:text-right px-0 lg:px-2"
                            >
                              {service.description}
                            </CardItem>
                            <a
                              href={service.whatsapp}
                              target="blank"
                              className="relative inline-flex h-12 min:w-25 w-40 overflow-hidden rounded-full mt-2 p-[0.1rem] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:ring-2 hover:ring-offset-2 hover:ring-offset-slate-50 group"
                            >
                              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#da1f26_0%,#046e30_50%,#faac19_100%)]" />
                              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#f8e4ca] px-3 py-1 text-sm font-medium text-[#1d5503] backdrop-blur-3xl">
                                تواصل معنا{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="green"
                                  className="w-6 mx-2"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                                {/* svg icon */}
                              </span>
                              {/* svg icon */}
                            </a>
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4">
                            <img loading="lazy"
                              src={service.image}
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
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
