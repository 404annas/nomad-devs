"use client";

import ProjectForm from "@/components/dashboard/ProjectForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post("/admin/projects", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project created successfully");
      router.push("/dashboard/projects");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to create project");
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/projects" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h2 className="text-3xl font-serif text-black uppercase">New Project</h2>
          <p className="text-gray-500 mt-1">Add a new work to your portfolio.</p>
        </div>
      </div>

      <ProjectForm 
        onSubmit={(data) => createMutation.mutate(data)} 
        isLoading={createMutation.isPending} 
      />
    </div>
  );
}
