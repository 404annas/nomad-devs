"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProtectedRoute from "@/components/dashboard/ProtectedRoute";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login" || pathname === "/dashboard/login/";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-64 flex flex-col min-h-screen relative z-10">
          <DashboardHeader />
          <main className="p-8 flex-1">
            {children}
          </main>
        </div>

        {/* Inject CSS to hide public navbar/footer */}
        <style jsx global>{`
          .public-navbar, .public-footer {
            display: none !important;
          }
        `}</style>
      </div>
    </ProtectedRoute>
  );
}
