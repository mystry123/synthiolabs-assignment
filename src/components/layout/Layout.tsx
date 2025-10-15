import type { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-full bg-white relative overflow-hidden">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0"
        // Alternative:  CSS gradient instead of the SVG
        // style={{
        //   backgroundImage: `
        // radial-gradient(circle at 70% 30%,  rgba(173, 216, 230, 0.35) , transparent 50%),
        // radial-gradient(circle at 30% 70%, rgba(232,220,252,0.5) , transparent 60%)`,
        // }}
        style={{
          backgroundImage: `url('/assets/gradient.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 py-3">
        <Header />
        <div className="flex-1 flex overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
