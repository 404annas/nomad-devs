"use client";

import { Bell, Search, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-medium text-gray-400 uppercase ">Dashboard</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-black transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-gray-100"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-black leading-none">{user?.name}</p>
            <p className="text-[10px] text-gray-400 font-medium uppercase  mt-1">{user?.role}</p>
          </div>
          <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-400">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
