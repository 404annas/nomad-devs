"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FolderKanban, 
  LogOut, 
  User, 
  Settings,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils"; // I'll create this helper if not exists

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Projects", icon: FolderKanban, href: "/dashboard/projects" },
  { name: "Profile", icon: User, href: "/dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout, isLoggingOut } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-50/50 border-r border-gray-100 flex flex-col fixed left-0 top-0 z-30">
      <div className="p-8">
        <h2 className="text-sm font-bold uppercase text-black">Dwell Rich Designz</h2>
        <div className="w-37 h-[2px] bg-black mt-1"></div>
      </div>

      <nav className="flex-1 px-6 space-y-1 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group",
                isActive 
                  ? "bg-black text-white" 
                  : "text-white bg-black hover:bg-black/10 hover:text-black traansition-all duration-300"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-4 h-4", isActive ? "text-white" : "text-white group-hover:text-black")} />
                <span className="text-[12px] font-bold uppercase">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-100 bg-white">
        <div className="mb-6 px-2">
          <p className="text-[9px] font-bold text-gray-300 uppercase mb-1">Account</p>
          <p className="text-[11px] font-bold text-black truncate">{user?.name}</p>
          <p className="text-[10px] text-gray-400 truncate mt-0.5">{user?.email}</p>
        </div>
        
        <button
          onClick={() => logout()}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-2 py-3 text-[10px] font-bold uppercase text-black hover:text-red-600 transition-all border border-gray-100 rounded-lg hover:border-red-100 bg-red-100 hover:bg-red-200 transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          <LogOut className="w-3 h-3" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
