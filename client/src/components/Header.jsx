import React, { useState } from "react";
import { ShieldCheck, Cpu, ClipboardList, BookOpen, FileCode, Search, ChevronRight } from "lucide-react";
import { WafSchemaModal } from "./WafSchemaModal";

export function Header({ activeTab, setActiveTab }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <header className="glass-panel sticky top-2 z-40 mx-auto max-w-7xl px-3 sm:px-5 py-2.5 my-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="h-5 w-5" aria-label="Website Audit AI Logo" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h1 className="font-bold text-base sm:text-lg text-white tracking-tight font-heading truncate">Website Audit AI</h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                  WAEF v2.0
                </span>
              </div>
              
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-0.5">
                <span>Home</span>
                <ChevronRight className="h-3 w-3 text-slate-600" />
                <span className="text-blue-400 font-semibold">WAEF v2.0 Audit Dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Audit Search Bar */}
        <div className="relative flex-1 max-w-xs hidden lg:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="search"
            name="q"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search WAEF parameters or rules..."
            aria-label="Search WAEF audit parameters"
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all font-mono"
          />
        </div>

        {/* Navigation Mode Bar */}
        <div className="flex items-center justify-between gap-2 border-t md:border-t-0 border-slate-800/60 pt-2 md:pt-0">
          <nav aria-label="Main Audit Navigation" className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none w-full md:w-auto">
            <button
              onClick={() => setActiveTab("audit")}
              aria-label="Live AI Audit Tab"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 ${
                activeTab === "audit"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Live AI Audit</span>
            </button>

            <button
              onClick={() => setActiveTab("manual")}
              aria-label="Blank Audit Sheet Tab"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 ${
                activeTab === "manual"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <ClipboardList className="h-3.5 w-3.5" />
              <span>Blank Audit Sheet</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Open Handbook Schema Modal"
              className="px-2.5 py-1 text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg flex items-center gap-1 transition-all shrink-0"
            >
              <FileCode className="h-3.5 w-3.5 text-blue-400" />
              <span>Schema</span>
            </button>
          </div>
        </div>
      </header>

      {/* Reference Modal */}
      <WafSchemaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
