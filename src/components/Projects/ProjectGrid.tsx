import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  slug: string;
  title: string;
  location: string;
  mainPic: { url: string };
  category: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              {project.mainPic?.url && (
                <Image
                  src={project.mainPic.url}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{project.category}</p>
              <h3 className="text-lg font-serif text-black mt-1 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{project.location}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
