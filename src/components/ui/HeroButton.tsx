import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon | React.ComponentType<{ size: number }>;
  download?: boolean;
  target?: '_self' | '_blank';

}

export default function HeroButton({
  href,
  variant = 'primary',
  children,
  icon: Icon,
  download = false,
  target = '_self',
}: HeroButtonProps) {
  const baseStyles =
    "px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full xs:w-auto";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#327280] to-[#1a5c66] hover:from-[#2a6470] hover:to-[#155560] text-white shadow-lg hover:shadow-xl hover:shadow-[#327280]/25",
    secondary:
      "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:border-[#327280]/40 dark:hover:border-[#5ab4c4]/40 hover:text-[#327280] dark:hover:text-[#5ab4c4] shadow-sm hover:shadow-md",
  };

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      download={download ? true : undefined}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
      {Icon && <Icon size={18} />}
    </a>
  );
}
