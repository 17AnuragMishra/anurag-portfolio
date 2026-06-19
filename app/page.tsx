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
            </div>

            <div className="grid min-w-[260px] gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <QuickInfo
                label="Experience"
                value={`${RESUME_DATA.work.length} roles`}
                detail="Hands-on product and internship work"
              />
              <QuickInfo
                label="Projects"
                value={`${RESUME_DATA.projects.length}+ builds`}
                detail="Recent work with UI, real-time, and AI products"
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
                A quick look at the kind of products I’ve been building recently.
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
          </Section>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
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
      <p className="text-xs uppercase tracking-[0.14em] text-[#8a6840]">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#111827]">{value}</p>
      <p className="mt-1 text-sm leading-6 text-[#6b7280]">{detail}</p>
    </div>
  );
}
