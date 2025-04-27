import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Building Digital Experiences That Matter",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a E-commerce platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "AlphabetZ - Learn All Tenses",
    des: "AlphabetZ is an educational website that provides clear explanations and examples for all English tenses, helping users improve their grammar knowledge effectively.",
    img: "/p1.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/php.svg", "/mysql.svg"],
    link: "https://king-upe.github.io/Alphabetz/",
    sourceCode: "https://github.com/KING-UPE/Alphabetz" 
  },
  {
    id: 2,
    title: "Electro - Online Phone Store",
    des: "Electro is a full-featured e-commerce platform for smartphones. Browse, search, and purchase your favorite phones with a secure login system and smooth user experience.",
    img: "/p2.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/jquery.svg", "/bootstrap.svg"],
    link: "https://king-upe.github.io/Electro/", 
    sourceCode: "https://github.com/KING-UPE/Electro"
  },
] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} on the Electro phone store was a game-changer. He transformed our vision into a sleek, fully functional e-commerce platform that perfectly represents our brand. From user-friendly design to secure login and smooth checkout, every detail was handled with care and precision. Highly recommend him to anyone looking to build a powerful online store.`,
    name: "Ravindu Perera",
    title: "Owner of Electro Mobile Store",
  },
  {
    quote: `Working with ${links.ownerName} on the Electro phone store was a game-changer. He transformed our vision into a sleek, fully functional e-commerce platform that perfectly represents our brand. From user-friendly design to secure login and smooth checkout, every detail was handled with care and precision. Highly recommend him to anyone looking to build a powerful online store.`,
    name: "Ravindu Perera",
    title: "Owner of Electro Mobile Store",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Undergraduate Software Engineer",
    desc: "Worked in a team environment to develop a full-stack web application, focusing on clean architecture, component design, and API integration.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web App Developer",
    desc: "Created a responsive, cross-platform application with a focus on user experience, third-party API integration, and efficient performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the full development lifecycle of a mobile application project, from concept and UI/UX design to deployment on public platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cybersecurity Enthusiast",
    desc: "Actively engaged in Capture The Flag (CTF) competitions and hands-on labs, focusing on ethical hacking, vulnerability analysis, and network security.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },    
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/KING-UPE",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/upendra-uddimantha-dasanayaka",
  },
  {
    name: "Youtube",
    img: "/yt.svg",
    link: "https://www.youtube.com/@upendra_dasanayaka",
  },
  {
    name: "Facebook",
    img: "/fb.svg",
    link: "https://web.facebook.com/profile.php?id=61574713296803",
  },
  {
    name: "Instagram",
    img: "/instagrame.svg",
    link: "https://www.instagram.com/__crazy._.demon__",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Javascript"],
  stack2: ["PHP", "Python", "MySQL"],
} as const;
