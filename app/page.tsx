import { RESUME_DATA } from "@/lib/resume-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/ui/section";
import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

const featuredProjects = RESUME_DATA.projects.slice(0, 4);
const otherProjects = RESUME_DATA.projects.slice(4);
const githubUsername = RESUME_DATA.personalWebsiteUrl.split("/").filter(Boolean).pop();
const TECH_STACK_ICONS = [
  { name: "React", Icon: ReactMark },
  { name: "Next.js", Icon: NextMark },
  { name: "TypeScript", Icon: TypeScriptMark },
  { name: "Node.js", Icon: NodeMark },
  { name: "MongoDB", Icon: MongoMark },
  { name: "Tailwind", Icon: TailwindMark },
] as const;

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <section className="space-y-8">
        <header className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a6840]">
                  {RESUME_DATA.about}
                </p>
                <div className="space-y-3">
                  <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[#111827] md:text-6xl">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-[#4b5563]">
                    {RESUME_DATA.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-[#111827] px-5 text-white hover:bg-[#1f2937]"
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="mr-2 size-4" />
                    Contact Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5"
                >
                  <a
                    href={RESUME_DATA.personalWebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <ArrowUpRightIcon className="ml-2 size-4" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-[#4b5563]">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-[#faf8f4] px-4 py-2">
                  <MapPinIcon className="size-4 text-[#8a6840]" />
                  {RESUME_DATA.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-[#faf8f4] px-4 py-2">
                  Open to frontend and full-stack roles
                </span>
              </div>

              <GitHubContributions username={githubUsername ?? "17AnuragMishra"} />
            </div>

            <div className="grid min-w-[260px] gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <QuickInfo
                label="Projects"
                value={`${RESUME_DATA.projects.length}+ builds`}
                detail="UI, real-time, and AI products"
              />
              <QuickInfo
                label="Open Source"
                value={`${RESUME_DATA.openSource.length} repos`}
                detail="Merged PRs and contribution work"
              />
              <QuickInfo
                label="Stack"
                value="React, Next.js, Node.js"
                detail="Frontend-first with full-stack comfort"
              />
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a6840]">
                Selected Projects
              </p>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827] md:text-3xl">
                Real work, easy to scan
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[#6b7280]">
                A quick look at the kind of products I&apos;ve been building recently.
              </p>
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  category={project.category}
                  period={project.period}
                  link={"link" in project ? project.link?.href : undefined}
                />
              ))}
            </div>
          </Section>
          
          <Section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="mb-2 flex items-center gap-3">
              <BriefcaseBusinessIcon className="size-5 text-[#8a6840]" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
                Experience
              </h2>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.work.map((work) => (
                <Card
                  key={`${work.company}-${work.start}`}
                  className="rounded-2xl border border-black/6 bg-[#fcfbf9] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#111827]">
                        {work.company}
                      </h3>
                      <p className="text-sm text-[#6b7280]">{work.title}</p>
                    </div>
                    <span className="text-sm text-[#6b7280]">
                      {work.start} - {work.end}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4b5563]">
                    {work.description.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-[#8a6840]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a6840]">
                Core Skills
              </p>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
                Tools I use most
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {RESUME_DATA.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full border border-black/8 bg-[#faf8f4] px-3 py-1.5 text-xs text-[#374151]"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid gap-3 pt-5">
              {RESUME_DATA.quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-2xl border border-black/6 bg-[#faf8f4] px-4 py-3 text-sm leading-6 text-[#4b5563]"
                >
                  {fact}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 sm:grid-cols-4 lg:grid-cols-3">
              {TECH_STACK_ICONS.map((tech) => (
                <div
                  key={tech.name}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-black/6 bg-[#fcfbf9] p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                  title={tech.name}
                >
                  <tech.Icon className="size-8" />
                  <span className="text-[11px] font-medium text-[#4b5563]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="mb-2 flex items-center gap-3">
              <GraduationCapIcon className="size-5 text-[#8a6840]" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
                Education & More Projects
              </h2>
            </div>

            <Card className="rounded-2xl border border-black/6 bg-[#fcfbf9] p-5">
              <p className="text-sm text-[#6b7280]">
                {RESUME_DATA.education[0].start} - {RESUME_DATA.education[0].end}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                {RESUME_DATA.education[0].degree}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#4b5563]">
                {RESUME_DATA.education[0].school}
              </p>
            </Card>

            <div className="grid gap-3 pt-5">
              {otherProjects.map((project) => (
                <Card
                  key={project.title}
                  className="rounded-2xl border border-black/6 bg-[#fcfbf9] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-[#111827]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#6b7280]">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.12em] text-[#8a6840]">
                      {project.period}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </div>

        <Section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a6840]">
              Open Source Contributions
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111827] md:text-3xl">
              Public work that backs the resume
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[#6b7280]">
              Contributions where I&apos;ve merged pull requests and stayed involved
              with ongoing issues.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {RESUME_DATA.openSource.map((item) => (
              <Card
                key={`${item.organization}-${item.repo}`}
                className="rounded-2xl border border-black/6 bg-[#fcfbf9] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-[#111827] hover:text-[#8a6840]"
                      >
                        {item.organization}
                      </a>
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-[#8a6840] hover:underline"
                      >
                        [repo]
                      </a>
                      {item.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="rounded-full border border-black/8 bg-[#f3eee5] px-2.5 py-1 text-[11px] text-[#374151]"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-[#4b5563]">{item.title}</p>
                  </div>

                  <span className="text-sm text-[#6b7280]">
                    {item.start} - {item.end}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4b5563]">
                  {item.description.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-[#8a6840]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "GitHub Profile",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}

function GitHubContributions({ username }: { username: string }) {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-black/6 bg-[#faf8f4] p-4 hover:border-[#8a6840]/35 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
      aria-label={`${username} GitHub contributions`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[#8a6840]">
            GitHub
          </p>
          <p className="mt-1 text-lg font-semibold text-[#111827]">
            Contributions
          </p>
        </div>
        <ArrowUpRightIcon className="size-4 shrink-0 text-[#8a6840]" />
      </div>

      <div className="overflow-hidden rounded-xl border border-black/6 bg-white p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/8a6840/${username}`}
          alt={`${username} GitHub contributions graph`}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function ReactMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="React">
      <g fill="none" stroke="#5fd3f3" strokeWidth="2.8">
        <ellipse cx="24" cy="24" rx="18" ry="7" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
      </g>
      <circle cx="24" cy="24" r="4" fill="#1f9ec7" />
    </svg>
  );
}

function NextMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Next.js">
      <circle cx="24" cy="24" r="20" fill="#111827" />
      <path
        d="M16 33V15h4.5l11.8 18H28L20 21.2V33h-4Z"
        fill="#fffdfa"
      />
      <path d="M31.2 15h4v18h-4V15Z" fill="#fffdfa" />
    </svg>
  );
}

function TypeScriptMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="TypeScript">
      <rect width="38" height="38" x="5" y="5" rx="8" fill="#3178c6" />
      <path
        d="M14 19.2h14v3.3h-5v12.7h-4V22.5h-5v-3.3Zm16.2 12.5c1 .7 2.3 1.2 3.7 1.2 1.2 0 1.9-.4 1.9-1.2 0-.7-.5-1-2.4-1.7-2.7-1-4.4-2.1-4.4-4.7 0-2.8 2.2-4.6 5.5-4.6 1.8 0 3.3.4 4.5 1.1v3.6c-1.2-.8-2.5-1.3-3.8-1.3-1.1 0-1.8.4-1.8 1.1 0 .7.5 1 2.6 1.8 3 1.1 4.2 2.4 4.2 4.8 0 3-2.2 4.7-5.8 4.7-2 0-3.7-.5-4.9-1.3v-3.5Z"
        fill="#fffdfa"
      />
    </svg>
  );
}

function NodeMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Node.js">
      <path
        d="M24 5.5 40.5 15v18L24 42.5 7.5 33V15L24 5.5Z"
        fill="#6da55f"
      />
      <path
        d="M15 31V17h4l6 8.6V17h4v14h-3.8L19 22.2V31h-4Zm19.6.3c-1.9 0-3.3-.5-4.5-1.3v-3.2c1.2.9 2.6 1.4 4.1 1.4 1.1 0 1.7-.3 1.7-1 0-.6-.4-.9-2-1.4-2.3-.8-3.7-1.8-3.7-4 0-2.4 1.9-4 4.8-4 1.5 0 2.8.3 3.8.9v3.1c-1-.6-2.2-1-3.4-1-1 0-1.5.3-1.5.9s.5.8 2.1 1.4c2.5.9 3.6 2 3.6 4.1 0 2.6-1.9 4.1-5 4.1Z"
        fill="#fffdfa"
      />
    </svg>
  );
}

function MongoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="MongoDB">
      <path
        d="M24.5 4.5s11 8.3 11 21.1c0 8-4.5 14.1-11.1 17.9C17.8 39.8 13 33.7 13 25.7 13 12.8 24.5 4.5 24.5 4.5Z"
        fill="#47a248"
      />
      <path
        d="M24.5 9.6v33.9"
        stroke="#1f6f3b"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M24.5 9.6c2.2 5.2 3.4 10.4 3.4 15.5 0 5.9-1.2 11.5-3.5 16.6"
        fill="#63c160"
        opacity="0.75"
      />
    </svg>
  );
}

function TailwindMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Tailwind CSS">
      <path
        d="M13.5 20.7c2.8-7.4 7.5-11.1 14.1-11.1 4 0 6.8 1.5 8.5 4.5 1 1.8 2.2 2.9 3.5 3.3 1.4.4 3 .1 4.9-.9-2.8 7.4-7.5 11.1-14.1 11.1-4 0-6.8-1.5-8.5-4.5-1-1.8-2.2-2.9-3.5-3.3-1.4-.4-3-.1-4.9.9Zm-10 10.8c2.8-7.4 7.5-11.1 14.1-11.1 4 0 6.8 1.5 8.5 4.5 1 1.8 2.2 2.9 3.5 3.3 1.4.4 3 .1 4.9-.9-2.8 7.4-7.5 11.1-14.1 11.1-4 0-6.8-1.5-8.5-4.5-1-1.8-2.2-2.9-3.5-3.3-1.4-.4-3-.1-4.9.9Z"
        fill="#38bdf8"
      />
    </svg>
  );
}

function QuickInfo({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-black/6 bg-[#faf8f4] p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-[#8a6840]">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-[#111827]">{value}</p>
      <p className="mt-1 text-sm leading-6 text-[#6b7280]">{detail}</p>
    </div>
  );
}
