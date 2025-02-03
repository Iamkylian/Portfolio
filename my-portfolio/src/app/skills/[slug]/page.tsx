import { CompetencePage } from "./CompetencePage";
import { skills } from "../../skills";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CompetencePage slug={slug} />;
}