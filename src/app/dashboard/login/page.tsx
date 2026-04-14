"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Lock, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.webp";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/auth/login", { email, password });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth-me"], data.data);
      toast.success("Welcome back, " + data.data.name);
      router.push("/dashboard");
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-4 pt-10 pb-10">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 mb-4">
            <Image src={logo} alt="Dwell Rich Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-serif text-black uppercase mb-1">Admin Login</h1>
          <p className="text-gray-500 text-sm">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase text-gray-500 font-medium ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                placeholder="admin@designz.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase text-gray-500 font-medium ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-black text-white py-4 cursor-pointer rounded-xl font-medium uppercase text-sm hover:bg-gray-900 active:scale-[0.98] transition-all duration-300 flex items-center justify-center disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {loginMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Authenticating...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
