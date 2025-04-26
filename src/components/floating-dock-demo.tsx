import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandWhatsapp,
  IconBrandSnapchat,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-white dark:text-white" />
      ),
      href: "http://wa.me/+966530030468",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Snapchat",
      icon: (
        <IconBrandSnapchat className="h-full w-full text-white dark:text-white" />
      ),
      href: "https://www.snapchat.com/add/ad_fid",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-white dark:text-white" />,
      href: "https://x.com/@ad_fid",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Tiktok",
      icon: (
        <IconBrandTiktok className="h-full w-full text-white dark:text-white" />
      ),
      href: "https://www.tiktok.com/@ad_fid",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <FloatingDock
      mobileClassName="translate-x-20" // only for demo, remove for production
      items={links}
    />
  );
}
