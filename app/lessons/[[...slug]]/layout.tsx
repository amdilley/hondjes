import { NavigationBar } from "@/ui/components/NavigationBar/NavigationBar";

import sections from "@/lessons/outline.json";

export default async function LessonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <NavigationBar
        sections={sections}
        pathPrefix="/lessons"
        activePath={`/${slug.join("/")}`}
      />
      {children}
    </div>
  );
}
