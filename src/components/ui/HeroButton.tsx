import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
}

export default function HeroButton({ href, variant = 'primary', children, icon: Icon }: HeroButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2";
  const variants = {
    primary:
    "bg-[#327280] hover:bg-[#256c5b] text-white shadow-lg hover:shadow-xl", // Updated background color for primary
    secondary:
      "bg-white/10 backdrop-blur-sm text-black border-2 border-gray-200 dark:border-[#256c5b] hover:border-[#256c5b] dark:hover:border-[#256c5b]",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
      {Icon && <Icon size={20} />}
    </a>
  );
}