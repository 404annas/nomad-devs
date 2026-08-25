"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { 
  Plus, 
  Search, 
  ExternalLink, 
  Edit3, 
  Trash2, 
  Star, 
  Loader2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import ConfirmModal from "@/components/dashboard/ConfirmModal";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

interface Project {
  _id: string;
  slug: string;
  title: string;
  category: string;
  status: 'published' | 'draft';
  isFeatured: boolean;
  order: number;
  mainPic: { url: string };
}

const columnHelper = createColumnHelper<Project>();

export default function ProjectsPage() {
  const queryClient = useQueryClient();
  const [globalFilter, setGlobalFilter] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data } = await api.get("/admin/projects?limit=200");
      return data.data;
    },
  });

  const toggleFeaturedMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.patch(`/admin/projects/${id}/toggle-featured`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Feature status updated");
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: string }) => {
      await api.patch(`/admin/projects/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project status updated");
    },
  });

  const updateOrderMutation = useMutation({
    mutationFn: async ({ id, order }: { id: string, order: number }) => {
      await api.patch(`/admin/projects/${id}`, { order });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Order updated");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/admin/projects/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project deleted successfully");
    },
  });

  
  const columns = useMemo(() => [
    columnHelper.accessor("title", {
      header: ({ column }) => (
        <button className="flex items-center gap-2 hover:text-black transition-colors" onClick={() => column.toggleSorting()}>
          Project <ArrowUpDown className="w-3 h-3" />
        </button>
      ),
      cell: (info) => {
        const project = info.row.original;
        return (
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
              {project.videoThumbnail?.url ? (
                <video src={project.videoThumbnail.url} muted className="w-full h-full object-cover" />
              ) : project.mainPic?.url ? (
                <Image src={project.mainPic.url} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-400 font-bold uppercase">No Pic</div>
              )}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-black text-sm truncate">{project.title || "Untitled"}</p>
              <p className="text-[10px] text-gray-400 uppercase mt-0.5">{project.slug}</p>
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => <span className="text-xs font-medium text-gray-600 uppercase">{info.getValue() || "—"}</span>,
    }),
    columnHelper.accessor("order", {
      header: "Order",
      cell: (info) => (
        <input 
          type="number" 
          defaultValue={info.getValue() || 0}
          className="w-16 px-2 py-1 border rounded text-xs"
          onBlur={(e) => updateOrderMutation.mutate({ id: info.row.original._id, order: parseInt(e.target.value) })}
        />
      ),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        const id = info.row.original._id;
        return (
          <button 
            onClick={() => updateStatusMutation.mutate({ 
              id, 
              status: status === 'published' ? 'draft' : 'published' 
            })}
            className={cn(
              "px-3 py-1 rounded-full text-[9px] font-bold uppercase transition-all",
              status === 'published' 
                ? "bg-green-50 text-green-600" 
                : "bg-amber-50 text-amber-600"
            )}
          >
            {status}
          </button>
        );
      },
    }),
    columnHelper.accessor("isFeatured", {
      header: "Featured",
      cell: (info) => {
        const isFeatured = info.getValue();
        return (
          <button 
            onClick={() => toggleFeaturedMutation.mutate(info.row.original._id)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isFeatured ? "text-amber-400 bg-amber-50" : "text-gray-200 hover:text-amber-400"
            )}
          >
            <Star className={cn("w-4 h-4", isFeatured && "fill-current")} />
          </button>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: (info) => (
        <div className="flex items-center justify-end gap-1">
          <Link href={`/projects/${info.row.original.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-black transition-colors">
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link href={`/dashboard/projects/edit/?id=${info.row.original._id}`} className="p-2 text-gray-400 hover:text-black transition-colors">
            <Edit3 className="w-4 h-4" />
          </Link>
          <button 
            onClick={() => setDeleteTarget(info.row.original)}
            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    }),
  ], [queryClient]);

  const table = useReactTable({
    data: projects || [],
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif text-black">Portfolio</h2>
          <p className="text-gray-500 mt-1">Manage your collection of works.</p>
        </div>
        <Link 
          href="/dashboard/projects/new" 
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium uppercase hover:bg-gray-900 transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
          <input 
            type="text"
            placeholder="Search projects..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-all text-sm"
          />
        </div>
      </div>

      {/* Modern Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-20 flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="text-sm uppercase font-medium animate-pulse">Fetching Projects</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="bg-gray-50/50 border-b border-gray-100">
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} className="px-6 py-5 text-[10px] font-bold uppercase text-gray-400">
                          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/30 transition-colors group">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-50">
              <div className="text-xs text-gray-500 font-medium">
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <ConfirmModal 
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteTarget && deleteMutation.mutate(deleteTarget._id)}
        title="Delete Project"
        description={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
      />
    </div>
  );
}
