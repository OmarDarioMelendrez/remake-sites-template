"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const Accordion = ({
  title,
  children,
  isOpen,
  toggle,
}: AccordionProps) => {
  return (
    <div className="border border-[#8B4513]/20 rounded-lg mb-4 overflow-hidden">
      <button
        className={cn(
          "flex justify-between items-center w-full p-4 text-left text-lg font-medium bg-[#8B4513]/5",
          isOpen ? "border-b border-[#8B4513]/20" : ""
        )}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="text-[#8B4513]/90">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform text-[#8B4513]/70",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none h-0"
        )}
        style={{
          willChange: "opacity, transform",
        }}
      >
        {isOpen && <div className="p-4 bg-white">{children}</div>}
      </div>
    </div>
  );
};
