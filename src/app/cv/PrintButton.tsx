"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
    >
      <Printer size={16} />
      Print / Save as PDF
    </button>
  );
}
