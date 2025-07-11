interface SiteConfig {
  author: string;
  description: string;
  subtitle: string;
  identities: string[];
  projects: {
    name: string;
    description: string;
    icon?: string;
    link: string;
  }[];
  skills: {
    name: string;
    icon: string;
  }[];
  socials: {
    name: string;
    icon: string;
    link: string;
  }[];
}

const config: SiteConfig = {
  author: "Mio",
  description: "Mio's Homepage",
  subtitle: "白驹过隙 忽然而已",
  identities: ["学生", "ACGN爱好者"],
  projects: [
    {
      name: "Mio's Homepage",
      description:
        "个人主页，使用 Next.js 和 Tailwind CSS 构建和 Tailwind CSS 构建和 Tailwind CSS 构建和 Tailwind CSS 构建",
      icon: "https://avatars.githubusercontent.com/u/113767212",
      link: "https://github.com/awamio/homepage",
    },
  ],
  skills: [
    {
      name: "Git",
      icon: "/skills/Git.svg",
    },
    {
      name: "NextJS",
      icon: "/skills/NextJS.svg",
    },
    {
      name: "Photoshop",
      icon: "/skills/Photoshop.svg",
    },
    {
      name: "Premiere",
      icon: "/skills/Premiere.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/skills/TailwindCSS.svg",
    },
  ],
  socials: [
    {
      name: "Blog",
      icon: "line-md:edit-full-twotone",
      link: "/",
    },
    {
      name: "Email",
      icon: "line-md:email-alt-twotone",
      link: "mailto:pzjawa@qq.com",
    },
    {
      name: "GitHub",
      icon: "line-md:github-twotone",
      link: "https://github.com/pzjawa",
    },
  ],
};

export default config;
