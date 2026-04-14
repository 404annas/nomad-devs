"use client";

import { useAuth } from "@/hooks/useAuth";
import { User, Mail, Shield, Calendar, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { user, logout, isLoggingOut } = useAuth();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-2xl">
      <div>
        <h2 className="text-3xl font-serif text-black">Admin Profile</h2>
        <p className="text-gray-500 mt-1">Manage your account information.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
            <div className="w-24 h-24 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-300">
              <User size={48} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black uppercase">{user?.name}</h3>
              <p className="text-gray-500 text-sm font-medium">{user?.role === 'admin' ? 'System Administrator' : user?.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Email Address</p>
                <p className="text-sm font-medium text-black mt-0.5">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Account Access</p>
                <p className="text-sm font-medium text-black mt-0.5">Full Dashboard Permissions</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Role Verification</p>
                <p className="text-sm font-medium text-black mt-0.5 uppercase">Verified Admin</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <button 
              onClick={() => logout()}
              disabled={isLoggingOut}
              className="flex items-center justify-center gap-3 bg-red-50 text-red-600 px-8 py-4 rounded-xl text-[10px] font-bold uppercase hover:bg-red-100 transition-all active:scale-[0.98] disabled:opacity-50 w-full md:w-auto"
            >
              <LogOut className="w-4 h-4" />
              Sign Out of Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
