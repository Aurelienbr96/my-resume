import { PropsWithChildren } from "react";

export const StickySection = ({ children }: PropsWithChildren) => (
  <div className="sticky top-0 z-20 ml-6 mb-4 w-screen bg-slate-900/75 h-12 flex items-center backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      {children}
    </h2>
  </div>
);
