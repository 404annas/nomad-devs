"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoginPage = pathname === "/dashboard/login" || pathname === "/dashboard/login/";
    if (!isLoading && !isAuthenticated && !isLoginPage) {
      router.push("/dashboard/login");
    }
  }, [isLoading, isAuthenticated, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-black mb-4" />
        <p className="text-sm uppercase font-medium animate-pulse">Verifying Session</p>
      </div>
    );
  }

  const isLoginPage = pathname === "/dashboard/login" || pathname === "/dashboard/login/";
  if (!isAuthenticated && !isLoginPage) {
    return null;
  }

  return <>{children}</>;
}
