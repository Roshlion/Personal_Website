import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm text-neutral-200 rounded-full border border-neutral-800 bg-neutral-900">
      {children}
    </span>
  );
}
