import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-display mb-8 text-center text-2xl font-bold capitalize tracking-tight text-[var(--text-primary)] sm:mb-10 sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}
