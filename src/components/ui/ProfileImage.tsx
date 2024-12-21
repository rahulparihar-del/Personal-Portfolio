interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({ src, alt, className = '' }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
      <img
        src={src}
        alt={alt}
        className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
      />
    </div>
  );
}