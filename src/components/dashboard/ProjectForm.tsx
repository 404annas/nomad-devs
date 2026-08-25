"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Save, 
  X, 
  Plus, 
  GripVertical, 
  Trash2, 
  Image as ImageIcon,
  Loader2,
  Type,
  Layout,
  Video
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";

// Drag and Drop Imports
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableGalleryItem } from "./SortableGalleryItem";

// --- Validation Schema ---
const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  category: z.string().min(1, "Category is required"),
  location: z.string().optional(),
  status: z.enum(["published", "draft"]),
  isFeatured: z.boolean().default(false),
  content: z.array(z.object({ text: z.string() })).default([{ text: "" }]),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

export default function ProjectForm({ initialData, onSubmit, isLoading }: ProjectFormProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [mainPic, setMainPic] = useState<any>(initialData?.mainPic || null);
  const [gallery, setGallery] = useState<any[]>(initialData?.gallery || []);
  const [videos, setVideos] = useState<any[]>(initialData?.videos || []);
  const [videoThumbnail, setVideoThumbnail] = useState<any>(initialData?.videoThumbnail || null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      category: initialData?.category || "",
      location: initialData?.location || "",
      status: initialData?.status || "published",
      isFeatured: initialData?.isFeatured || false,
      content: [{ text: "" }],
    },
  });

  useEffect(() => {
    if (initialData) {
      // Normalize content to always be an array of objects for the editor
      const normalizedContent = (initialData.content || [""]).map((item: any) => {
        let text = "";
        if (typeof item === 'string') {
          text = item;
        } else if (typeof item === 'object' && item !== null) {
          // If it's the {heading, text} structure, combine them
          const heading = item.heading ? `### ${item.heading}\n` : '';
          const body = Array.isArray(item.text) ? item.text.join('\n') : (item.text || '');
          text = `${heading}${body}`;
        } else {
          text = String(item);
        }
        return { text };
      });

      reset({
        title: initialData.title || "",
        slug: initialData.slug || "",
        category: initialData.category || "",
        location: initialData.location || "",
        status: initialData.status || "published",
        isFeatured: initialData.isFeatured || false,
        content: normalizedContent,
      });
      setMainPic(initialData.mainPic || null);
      setGallery(initialData.gallery || []);
      setVideos(initialData.videos || []);
      setVideoThumbnail(initialData.videoThumbnail || null);
    }
  }, [initialData, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "content",
  });

  // --- Cloudinary Upload Handler ---
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'gallery' | 'video') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!preset || !cloudName) {
      console.error("Cloudinary env vars missing:", { preset, cloudName });
      toast.error("Upload configuration error");
      setIsUploading(false);
      return;
    }

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset);
        
        const resourceType = type === 'video' ? 'video' : 'image';
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
          formData
        );
        return {
          url: res.data.secure_url,
          publicId: res.data.public_id,
        };
      });

      const uploadedMedia = await Promise.all(uploadPromises);

      if (type === 'main') {
        setMainPic(uploadedMedia[0]);
      } else if (type === 'gallery') {
        setGallery(prev => [...prev, ...uploadedMedia.map((m, i) => ({ ...m, order: prev.length + i }))]);
      } else if (type === 'video') {
        setVideos(prev => [...prev, ...uploadedMedia.map((m, i) => ({ ...m, order: prev.length + i }))]);
      }
      toast.success("Media uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload media");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setGallery((items) => {
        const oldIndex = items.findIndex((item) => item.publicId === active.id);
        const newIndex = items.findIndex((item) => item.publicId === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const removeGalleryItem = (publicId: string) => {
    setGallery(prev => prev.filter(item => item.publicId !== publicId));
  };

  const removeVideoItem = (publicId: string) => {
    setVideos(prev => prev.filter(item => item.publicId !== publicId));
  };

  const handleFormSubmit = (data: ProjectFormValues) => {
    // Update orders based on current array position
    const orderedGallery = gallery.map((item, index) => ({ ...item, order: index }));
    const orderedVideos = videos.map((item, index) => ({ ...item, order: index }));

    // Flatten content back to array of strings for the backend
    const flattenedContent = data.content.map(c => c.text).filter(t => t.trim() !== "");

    onSubmit({
      ...data,
      content: flattenedContent,
      mainPic,
      gallery: orderedGallery,
      videos: orderedVideos,
      videoThumbnail: videoThumbnail,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-10 max-w-5xl">
      {/* --- Basic Info Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl border border-gray-200">
        <div className="space-y-6 md:col-span-2 border-b border-gray-100 pb-6 mb-2">
          <h3 className="text-sm font-bold uppercase  text-black flex items-center gap-2">
            <Type className="w-4 h-4" /> Basic Information
          </h3>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase  text-gray-400 ml-1">Project Title</label>
          <input 
            {...register("title")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all"
            placeholder="e.g. Garden Design Kingston"
          />
          {errors.title && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase  text-gray-400 ml-1">URL Slug</label>
          <input 
            {...register("slug")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all"
            placeholder="e.g. garden-design-kingston"
          />
          {errors.slug && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.slug.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase  text-gray-400 ml-1">Category</label>
          <select 
            {...register("category")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all appearance-none bg-white"
          >
            <option value="">Select Category</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Garden">Garden</option>
            <option value="Kitchens">Kitchens</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Joinery">Joinery</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase  text-gray-400 ml-1">Location Subtitle</label>
          <input 
            {...register("location")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all"
            placeholder="e.g. Design and Build"
          />
        </div>

        <div className="flex items-center gap-8 md:col-span-2 pt-4">
          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("isFeatured")} className="w-4 h-4 accent-black" id="featured" />
            <label htmlFor="featured" className="text-xs font-bold uppercase  text-black cursor-pointer">Featured Project</label>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold uppercase  text-black">Status:</label>
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button 
                type="button" 
                onClick={() => setValue("status", "published")}
                className={cn("px-4 py-1.5 rounded-md text-[10px] font-bold uppercase  transition-all", watch("status") === 'published' ? "bg-white text-black shadow-sm" : "text-gray-400")}
              >Published</button>
              <button 
                type="button" 
                onClick={() => setValue("status", "draft")}
                className={cn("px-4 py-1.5 rounded-md text-[10px] font-bold uppercase  transition-all", watch("status") === 'draft' ? "bg-white text-black shadow-sm" : "text-gray-400")}
              >Draft</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Media Section --- */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-8">
        <div className="space-y-6 border-b border-gray-100 pb-6">
          <h3 className="text-sm font-bold uppercase  text-black flex items-center gap-2">
            <ImageIcon className="w-4 h-4" /> Media Assets
          </h3>
        </div>

        {/* Main Pic */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase  text-gray-400">Main Cover Image</label>
          <div className="flex items-start gap-6">
            <div className="relative w-40 aspect-[4/3] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden group flex items-center justify-center">
              {mainPic ? (
                <>
                  <Image src={mainPic.url} alt="Main" fill className="object-cover" />
                  <button 
                    onClick={() => setMainPic(null)}
                    className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </>
              ) : (
                <ImageIcon className="w-6 h-6 text-gray-200" />
              )}
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-xs text-gray-500 leading-relaxed">Primary visual for portfolio grids.</p>
              <label className="inline-block px-6 py-3 bg-black text-white text-[10px] font-bold uppercase  rounded-xl cursor-pointer hover:bg-gray-900 transition-all">
                {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Upload Main Image"}
                <input type="file" className="hidden" onChange={(e) => handleUpload(e, 'main')} accept="image/*" />
              </label>
            </div>
          </div>
        </div>

        {/* Gallery with Reordering */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold uppercase  text-gray-400">Project Gallery (Drag to Reorder)</label>
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase  text-black cursor-pointer hover:opacity-70 transition-opacity">
              <Plus className="w-3 h-3" /> Add Images
              <input type="file" className="hidden" multiple onChange={(e) => handleUpload(e, 'gallery')} accept="image/*" />
            </label>
          </div>
          
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={gallery.map(item => item.publicId)}
              strategy={rectSortingStrategy}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {gallery.map((item, idx) => (
                  <SortableGalleryItem 
                    key={item.publicId} 
                    item={item} 
                    index={idx} 
                    onRemove={removeGalleryItem} 
                  />
                ))}
                {gallery.length === 0 && !isUploading && (
                  <div className="col-span-full py-10 border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-300">
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <p className="text-[10px] font-bold uppercase ">No images uploaded</p>
                  </div>
                )}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        {/* Videos */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold uppercase  text-gray-400">Project Videos</label>
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase  text-black cursor-pointer hover:opacity-70 transition-opacity">
              <Plus className="w-3 h-3" /> Add Video
              <input type="file" className="hidden" multiple onChange={(e) => handleUpload(e, 'video')} accept="video/*" />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((item, idx) => {
              const isVideoThumbnail = videoThumbnail?.publicId === item.publicId;
              return (
                <div key={item.publicId} className="relative aspect-video bg-black rounded-xl overflow-hidden group border border-gray-200 flex items-center justify-center">
                  <video src={item.url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="text-white w-8 h-8" />
                  </div>
                  {isVideoThumbnail && (
                    <div className="absolute top-2 left-2 px-3 py-1 bg-black/80 text-white text-[10px] font-bold uppercase rounded-full flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" /> Thumbnail
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      if (isVideoThumbnail) {
                        setVideoThumbnail(null);
                      } else {
                        setVideoThumbnail({ url: item.url, publicId: item.publicId });
                      }
                    }}
                    className={`absolute bottom-2 left-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all ${
                      isVideoThumbnail
                        ? "bg-white text-black"
                        : "bg-white/90 text-black opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {isVideoThumbnail ? "Remove Thumbnail" : "Make it Thumbnail"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (isVideoThumbnail) setVideoThumbnail(null);
                      removeVideoItem(item.publicId);
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- Content Editor Section --- */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-6">
          <h3 className="text-sm font-bold uppercase  text-black flex items-center gap-2">
            <Layout className="w-4 h-4" /> Narrative Content
          </h3>
          <button 
            type="button" 
            onClick={() => append({ text: "" })}
            className="flex items-center gap-2 text-[10px] font-bold uppercase  text-gray-400 hover:text-black transition-colors"
          >
            <Plus className="w-3 h-3" /> Add Paragraph
          </button>
        </div>

        <div className="space-y-6">
          {fields.map((field, index) => (
            <div key={field.id} className="group relative">
              <div className="flex items-start gap-4">
                <div className="pt-3 text-gray-300 group-hover:text-black transition-colors cursor-grab active:cursor-grabbing">
                  <GripVertical className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-2">
                  <textarea 
                    {...register(`content.${index}.text`)}
                    rows={8}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all text-sm leading-relaxed min-h-[200px] resize-y"
                    placeholder="Write a paragraph describing the project details..."
                  />
                </div>
                <button 
                  type="button" 
                  onClick={() => remove(index)}
                  className="pt-3 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Form Actions --- */}
      <div className="flex items-center justify-end gap-4 pt-6">
        <button 
          type="button"
          onClick={() => window.history.back()}
          className="px-8 py-4 rounded-xl text-[10px] font-bold uppercase  text-gray-400 hover:text-black transition-colors"
        >
          Discard Changes
        </button>
        <button 
          type="submit"
          disabled={isLoading || isUploading}
          className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl text-[10px] font-bold uppercase  hover:bg-gray-900 transition-all active:scale-[0.98] disabled:bg-gray-200"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {initialData ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
