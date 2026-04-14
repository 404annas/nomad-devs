"use client";

import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, description }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm border border-gray-100 shadow-xl animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-sm font-bold uppercase text-black mb-2">{title}</h3>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-[10px] font-bold uppercase text-gray-400 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => { onConfirm(); onClose(); }}
            className="flex-1 py-2.5 rounded-xl text-[10px] font-bold uppercase bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
