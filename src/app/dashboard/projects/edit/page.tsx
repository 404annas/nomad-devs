"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import ProjectForm from "@/components/dashboard/ProjectForm";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function EditProjectContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: project, isLoading } = useQuery({
    queryKey: ["admin-project", id],
    queryFn: async () => {
      if (!id) return null;
      const { data } = await api.get(`/admin/projects/${id}`);
      return data.data;
    },
    enabled: !!id,
  });

  const updateMutation = useMutation({
    mutationFn: async (formData: any) => {
      await api.patch(`/admin/projects/${id}`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["admin-project", id] });
      toast.success("Project updated successfully");
      router.push("/dashboard/projects");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to update project");
    },
  });

  if (!id) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-gray-400 font-medium">
        <p className="uppercase">Invalid Project ID</p>
        <Link href="/dashboard/projects" className="text-black underline mt-2 text-xs uppercase">Go back</Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-gray-400">
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="text-sm uppercase font-medium animate-pulse">Loading Project Details</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/projects" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h2 className="text-3xl font-serif text-black uppercase">Edit Project</h2>
          <p className="text-gray-500 mt-1">Refine the details of your work.</p>
        </div>
      </div>

      <ProjectForm 
        initialData={project} 
        onSubmit={(data) => updateMutation.mutate(data)} 
        isLoading={updateMutation.isPending} 
      />
    </div>
  );
}

export default function EditProjectPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-gray-200" />
      </div>
    }>
      <EditProjectContent />
    </Suspense>
  );
}
