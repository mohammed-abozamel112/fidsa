"use client";
import { useState, useEffect, useRef } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as Hamburger, X } from "lucide-react"; // Icons from lucide-react
import { BrowserRouter, Link as LinkRouter } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/Logo.png"; // Adjust the path to your logo image

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const menuRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // عند الضغط على عنصر من القائمة
  const handleItemClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 1000);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mobileView) {
    return (
      <div
        dir="rtl"
        className={cn(
          "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <a href="/" onClick={handleItemClick}>
            <img src={logo} alt="Logo" className="h-15 logoClassname" />
          </a>
          {/*  // add item in navbar refer to sercice component in this page and
          scroll to it section without dropdown menu just itwm in nav */}
          <HoveredLink href="#aboutus">من نحن </HoveredLink>
          <HoveredLink href="#services">خدماتنا</HoveredLink>

          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm text-center">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }

  // Mobile view
  return (
    <BrowserRouter>
      <div
        dir="rtl"
        ref={menuRef}
        className="fixed top-0 inset-x-0 z-50 px-4 text-center w-full p-0"
      >
        <div className="flex items-center justify-between bg-[#fef3d3] dark:bg-black p-4 rounded-b-2xl shadow-lg">
          <div className="text-lg font-bold">
            <LinkRouter to="/" onClick={handleItemClick}>
              <img src={logo} alt="Logo" className="h-10 logoClassname" />
            </LinkRouter>
          </div>
          <button
            className="text-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X /> : <Hamburger />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-2 bg-[#fef3d3] dark:bg-black p-4 rounded-lg shadow-md space-y-4">
            {/* Services Dropdown */}
            <div>
              <HoveredLink
                href="#services"
                onClick={handleItemClick}
                /*  onClick={() => toggleDropdown("services")} */
                className="w-full font-medium"
              >
                خدماتنا
              </HoveredLink>
            </div>

            {/* Products Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("products")}
                aria-expanded={openDropdown === "products"}
                className="w-full font-medium"
              >
                Products
              </button>
              {openDropdown === "products" && (
                <div className="ml-4 mt-2 space-y-2 text-sm flex flex-col text-center">
                  <a
                    href="https://algochurn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleItemClick}
                  >
                    Algochurn
                  </a>
                  <a
                    href="https://tailwindmasterkit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleItemClick}
                  >
                    Tailwind Master Kit
                  </a>
                  <a
                    href="https://gomoonbeam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleItemClick}
                  >
                    Moonbeam
                  </a>
                  <a
                    href="https://userogue.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleItemClick}
                  >
                    Rogue
                  </a>
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("pricing")}
                aria-expanded={openDropdown === "pricing"}
                className="w-full font-medium"
              >
                Pricing
              </button>
              {openDropdown === "pricing" && (
                <div className="ml-4 mt-2 space-y-2 text-sm text-center flex flex-col ">
                  <LinkRouter to="/hobby" onClick={handleItemClick}>
                    Hobby
                  </LinkRouter>
                  <LinkRouter to="/individual" onClick={handleItemClick}>
                    Individual
                  </LinkRouter>
                  <LinkRouter to="/team" onClick={handleItemClick}>
                    Team
                  </LinkRouter>
                  <LinkRouter to="/enterprise" onClick={handleItemClick}>
                    Enterprise
                  </LinkRouter>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
