import { CompetencePage } from "./CompetencePage";
import { skills } from "../../skills";

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export default function Page({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  return <CompetencePage slug={slug} />;
}