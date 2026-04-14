"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X, GripVertical } from "lucide-react";
import Image from "next/image";

interface SortableGalleryItemProps {
  item: {
    publicId: string;
    url: string;
  };
  index: number;
  onRemove: (publicId: string) => void;
}

export function SortableGalleryItem({ item, index, onRemove }: SortableGalleryItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.publicId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden group border border-gray-200 shadow-none"
    >
      <Image src={item.url} alt={`Gallery ${index}`} fill className="object-cover pointer-events-none" />
      
      {/* Drag Handle */}
      <div 
        {...attributes} 
        {...listeners}
        className="absolute top-2 left-2 p-1.5 bg-white/90 rounded-full text-gray-400 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical className="w-3 h-3 text-black" />
      </div>

      <button 
        type="button"
        onClick={() => onRemove(item.publicId)}
        className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-3 h-3" />
      </button>

      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/50 text-[8px] font-bold text-white rounded uppercase ">
        Pos {index}
      </div>
    </div>
  );
}
