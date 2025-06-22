import Animations from "@/components/Animations";
import Skills from "@/components/Skills";
import avatar from "@/app/avatar.png";
import { Icon } from "@iconify/react";
import config from "@/site.config";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="grid place-content-center gap-30">
      <div className="mx-auto mt-[25vh] grid grid-cols-1 place-content-end gap-x-30 gap-y-15 md:grid-cols-2">
        <figure className="animate-rotate mx-auto aspect-square size-60 md:size-70">
          <Image
            className="outline-avatar h-full w-full -rotate-5 rounded-2xl outline-5 -outline-offset-1 select-none"
            src={avatar}
            alt={`${config.author}`}
            priority
          />
        </figure>
        <section className="animate-fade-in-up grid place-content-end">
          <p className="text-5xl/15">Hi,</p>
          <h1 className="text-5xl/15">
            I&apos;m&nbsp;
            <span className="text-author bg-underline bg-bottom bg-no-repeat font-bold">
              {config.author}
            </span>
          </h1>
          <div className="mt-5 grid grid-cols-3 gap-3 select-none">
            {config.socials.map((social) => (
              <a
                key={social.name}
                className="grid size-fit grid-flow-col place-content-center gap-1 rounded-lg border-2 border-transparent bg-sky-200/50 px-2 py-1 shadow-lg shadow-black/10 transition-all hover:bg-sky-200/75 hover:shadow-black/15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                href={social.link}
              >
                <Icon icon={social.icon} width={20} height={20} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="grid place-content-center gap-10 md:place-content-start">
        <section className="animate-fade-in-up grid gap-3">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-slate-500 decoration-2 underline-offset-3 hover:text-slate-600">
            About
          </h2>
          <div className="md:text-xl text-lg text-gray-500">
            {config.identities.map((identity, idx) => (
              <span key={identity}>
                {identity}
                {idx < config.identities.length - 1 ? " | " : null}
              </span>
            ))}
          </div>
          <p className="text-stroke md:text-5xl text-4xl font-bold">{config.subtitle}</p>
        </section>
        <section className="animate-fade-in-up grid gap-5">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-slate-500 decoration-2 underline-offset-3 hover:text-slate-600">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-5 md:w-175 md:grid-cols-2">
            {config.projects.map((project) => (
              <a
                href={project.link}
                key={project.name}
                className="relative min-h-25 w-85 overflow-hidden rounded-lg border border-transparent bg-sky-100 p-2 hover:border hover:border-gray-400/50 hover:bg-sky-200"
              >
                <h3 className="text-base font-bold text-slate-800">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                {project.icon && (
                  <Image
                    src={project.icon}
                    alt={project.name}
                    width={80}
                    height={80}
                    className="absolute -top-2 -right-2 rounded-full opacity-25 select-none"
                  />
                )}
              </a>
            ))}
          </div>
        </section>
        <section className="animate-fade-in-up grid gap-5">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-slate-500 decoration-2 underline-offset-3 hover:text-slate-600">
            Skills
          </h2>
          <Skills />
        </section>
      </div>
      <Animations />
    </main>
  );
}
