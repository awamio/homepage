import Skills from "@/components/Skills";
import avatar from "@/app/avatar.png";
import { Icon } from "@iconify/react";
import config from "@/site.config";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="grid min-h-screen place-content-center gap-30">
      <div className="mx-auto mt-[15vh] grid grid-cols-1 place-content-end gap-x-30 gap-y-15 md:mt-[25vh] md:grid-cols-2">
        <figure className="animate-rotate mx-auto aspect-square size-70">
          <Image
            className="h-full w-full -rotate-5 rounded-2xl outline-5 -outline-offset-1 outline-sky-100 select-none dark:outline-sky-900"
            src={avatar}
            alt={`${config.author}`}
            priority
          />
        </figure>
        <section className="animate-fade-in-up grid place-content-end">
          <p className="text-5xl/15 dark:text-gray-200">Hi,</p>
          <h1 className="text-5xl/15 dark:text-white">
            I&apos;m&nbsp;
            <span className="text-author bg-underline bg-bottom bg-no-repeat font-bold dark:bg-[linear-gradient(0deg,hsl(240_85%_85%/80%),transparent_70%]">
              {config.author}
            </span>
          </h1>
          <div className="mt-5 grid grid-cols-3 gap-3 select-none">
            {config.socials.map((social) => (
              <a
                key={social.name}
                className="grid grid-flow-col items-center justify-center gap-1.5 rounded-lg border-2 border-transparent bg-sky-200/50 px-2 py-1 shadow-lg shadow-black/10 transition-all hover:bg-sky-200/75 hover:shadow-black/15 dark:bg-sky-900/50 dark:shadow-gray-800/30 dark:hover:bg-sky-800/75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                href={social.link}
              >
                <Icon icon={social.icon} width={20} height={20} />
                <span className="dark:text-gray-200">{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="grid place-content-center gap-10 px-4 md:place-content-start">
        <section className="animate-fade-in-up grid gap-3">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-sky-800 decoration-2 underline-offset-3 hover:text-sky-900 dark:bg-sky-800 dark:text-sky-50 dark:hover:text-sky-100">
            About
          </h2>
          <div className="text-lg text-gray-500 md:text-xl dark:text-gray-300">
            {config.identities.map((identity, idx) => (
              <span key={identity}>
                {identity}
                {idx < config.identities.length - 1 ? " | " : null}
              </span>
            ))}
          </div>
          <p className="text-stroke text-4xl font-bold md:text-5xl">
            {config.subtitle}
          </p>
        </section>
        <section className="animate-fade-in-up grid gap-5">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-sky-800 decoration-2 underline-offset-3 hover:text-sky-900 dark:bg-sky-800 dark:text-sky-50 dark:hover:text-sky-100">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-5 md:w-175 md:grid-cols-2">
            {config.projects.map((project) => (
              <a
                href={project.link}
                key={project.name}
                className="relative min-h-25 w-85 overflow-hidden rounded-lg border border-transparent bg-sky-100 p-2 transition-colors duration-200 hover:border hover:border-gray-400/50 hover:bg-sky-200 dark:bg-gray-800/80 dark:hover:bg-gray-700/90"
              >
                <h3 className="text-base font-bold text-slate-800 dark:text-gray-200">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                {project.icon && (
                  <Image
                    src={project.icon}
                    alt={project.name}
                    width={80}
                    height={80}
                    className="absolute -top-2 -right-2 rounded-full opacity-25 select-none dark:opacity-40"
                  />
                )}
              </a>
            ))}
          </div>
        </section>
        <section className="animate-fade-in-up grid gap-5">
          <h2 className="size-fit rounded-lg bg-sky-100 px-3 py-1 text-center text-xl text-sky-800 decoration-2 underline-offset-3 hover:text-sky-900 dark:bg-sky-800 dark:text-sky-50 dark:hover:text-sky-100">
            Skills
          </h2>
          <Skills />
        </section>
      </div>
    </main>
  );
}
