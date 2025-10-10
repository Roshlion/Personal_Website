import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-900/50 text-neutral-200 rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:bg-neutral-800/70 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
      {children}
    </span>
  );
}
