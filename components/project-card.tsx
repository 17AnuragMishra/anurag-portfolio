import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  category: string;
  period: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  period,
  link,
}: Props) {
  return (
    <Card className="group flex h-full flex-col rounded-2xl border border-black/6 bg-[#fcfbf9] p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <Badge
              variant="secondary"
              className="rounded-full border border-black/8 bg-[#f3eee5] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#7b6240]"
            >
              {category}
            </Badge>
            <CardTitle className="text-lg leading-tight text-[#111827]">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#8a6840]"
                >
                  {title}
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                title
              )}
            </CardTitle>
          </div>
          <span className="rounded-full border border-black/8 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">
            {period}
          </span>
        </div>

        <div className="space-y-2">
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-sm leading-6 text-[#4b5563] print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[11px] text-[#4b5563] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
