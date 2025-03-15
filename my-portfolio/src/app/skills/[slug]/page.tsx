import { CompetencePage } from "./CompetencePage";
import { skills } from "../../skills";

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export default async function Page({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = await params;
  return <CompetencePage slug={slug} />;
}