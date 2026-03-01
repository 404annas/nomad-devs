import type { Metadata } from "next";
import { data } from "@/components/Projects/projectsData";
import { getProjectKeywords } from "@/lib/seoKeywords";
import ProjectPageClient from "./ProjectPageClient";

type ProjectContent = string | { heading?: string; text: string | string[] };

type PageProps = {
  params: Promise<{ id: string }> | { id: string };
};

const toSentence = (content?: ProjectContent[]) => {
  if (!content?.length) return "";
  const first = content[0];
  if (typeof first === "string") return first;
  if (Array.isArray(first.text)) return first.text.join(" ");
  return first.text;
};

export function generateStaticParams() {
  return data.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const projectId = resolvedParams?.id || "";
  const project = data.find((item) => item.id === projectId);
  const readableTitle = (project?.title || projectId || "project").replaceAll("-", " ").trim();
  const firstSentence = toSentence(project?.content);

  return {
    title: `${readableTitle} | Projects | Dwell Rich Designz`,
    description:
      firstSentence ||
      "Residential design and build project by Dwell Rich Designz.",
    keywords: getProjectKeywords(projectId || "residential-project", project?.title),
  };
}

const Page = () => {
  return <ProjectPageClient />;
};

export default Page;
