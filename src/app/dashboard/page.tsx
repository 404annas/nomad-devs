"use client";

import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { 
  FolderKanban, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  Plus,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  _id: string;
  slug: string;
  title: string;
  category: string;
  status: 'published' | 'draft';
  mainPic: { url: string };
}

export default function DashboardPage() {
  const { user } = useAuth();

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["admin-projects-summary"],
    queryFn: async () => {
      const { data } = await api.get("/admin/projects?limit=100");
      return data.data;
    },
  });

  const stats = [
    { 
      name: "Total Projects", 
      value: projects?.length || 0, 
      icon: FolderKanban, 
      color: "text-blue-600", 
      bg: "bg-blue-50/50" 
    },
    { 
      name: "Published", 
      value: projects?.filter(p => p.status === 'published').length || 0, 
      icon: CheckCircle2, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50/50" 
    },
    { 
      name: "Drafts", 
      value: projects?.filter(p => p.status === 'draft').length || 0, 
      icon: Clock, 
      color: "text-rose-600", 
      bg: "bg-rose-50/50" 
    },
  ];

  const recentProjects = projects?.slice(0, 4) || [];

  if (isLoading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p className="text-sm font-medium animate-pulse uppercase">Syncing Dashboard Data</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif text-black leading-tight">Welcome back, {user?.name}</h2>
          <p className="text-gray-500 mt-1 text-sm font-medium">Your portfolio overview and recent activities.</p>
        </div>
        <Link 
          href="/dashboard/projects/new" 
          className="bg-black text-white px-5 py-4 rounded-xl text-xs font-bold uppercase flex items-center gap-2 hover:scale-95 transition-all duration-300"
        >
          <Plus size={16} />
          New Project
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-5 rounded-2xl border border-gray-200 transition-all hover:border-gray-300 group">
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase">{stat.name}</p>
            <p className="text-2xl font-bold text-black mt-0.5 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Projects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-black" />
            <h3 className="text-sm font-bold uppercase text-black">Manage Projects</h3>
          </div>
          <Link href="/dashboard/projects" className="text-[11px] font-bold uppercase text-gray-400 hover:text-black transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentProjects.map((project) => (
            <Link 
              key={project._id} 
              href={`/dashboard/projects/edit/?id=${project._id}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all hover:border-gray-200"
            >
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                {project.videoThumbnail?.url ? (
                  <video 
                    src={project.videoThumbnail.url} 
                    muted
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : project.mainPic?.url ? (
                  <Image 
                    src={project.mainPic.url} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-300 font-bold uppercase">No Image</div>
                )}
                <div className="absolute top-2 right-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[8px] font-bold uppercase",
                    project.status === 'published' ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                  )}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5 truncate">{project.category || "General"}</p>
                <h4 className="text-xs font-bold text-black truncate group-hover:text-gray-600 transition-colors">{project.title}</h4>
              </div>
            </Link>
          ))}
          
          {/* Add Project Card */}
          <Link 
            href="/dashboard/projects/new"
            className="group border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center aspect-[4/3] hover:border-gray-200 hover:bg-gray-50/50 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-white transition-all">
              <Plus className="w-4 h-4 text-gray-400 group-hover:text-black" />
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Add Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
