"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer2 from "../Footer2";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Add a class to body to hide navbar/footer on project pages
    document.body.classList.add("project-detail-page");
    return () => {
      document.body.classList.remove("project-detail-page");
    };
  }, [pathname]);

  return <>
    <Navbar />
    {children}
    {/* <Footer2 /> */}
  </>;
}
