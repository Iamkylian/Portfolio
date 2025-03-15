import { ProjectPage } from "@/app/projects/[slug]/ProjectPage";
import { projects } from "../../projects";
import { generateProjectMetadata } from "../../metadata";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Génère dynamiquement les métadonnées pour chaque page de projet
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas."
    };
  }
  
  return generateProjectMetadata(
    project.title,
    project.description,
    project.slug,
    project.image ?? '/images/placeholder-project.jpg'
  );
}

export default function Page({ params }: PageProps) {
  const { slug } = params;
  return <ProjectPage slug={slug} />;
} 