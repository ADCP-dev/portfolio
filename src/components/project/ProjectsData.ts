import type { ProjectProps } from "./ProjectProps";

import portfolio from "../../img/projects/portfolio.jpg";
import portfolioVideo from "../../img/projects/portfolio.webm";
import a2cp from "../../img/projects/A2CP.jpg";
import a2cpVideo from "../../img/projects/A2CP.webm";

import laravel from "../../img/tecnologies/web/laravel.svg";
import vue from "../../img/tecnologies/web/vue.png";
import primevue from "../../img/tecnologies/web/primevue.png";
import inertia from "../../img/tecnologies/web/inertia.png";
import tailwind from "../../img/tecnologies/web/tailwind.webp";
import daisyui from "../../img/tecnologies/web/daisyui.png";
import astro from "../../img/tecnologies/web/astro.png";

export const projects : ProjectProps[] = [
    {
      title: "Administracion academia de música",
      description: "Clases, alumnos, horarios, calendario, tareas, pagos, etc.",
      technologies: [
        {
          name: "Laravel",
          url: "https://laravel.com/",
          img: laravel.src,
        },
        {
          name: "Vue3",
          url: "https://vuejs.org/",
          img: vue.src,
        },
        {
          name: "PrimeVue",
          url: "https://primevue.org/",
          img: primevue.src,
        },
        {
          name: "InertiaJS",
          url: "https://inertiajs.com/",
          img: inertia.src,
        },
        {
          name: "Tailwind",
          url: "https://tailwindcss.com/",
          img: tailwind.src,
        },
      ],
      dateStart: "2023",
      dateEnd: "Presente",
      workingAt: true,
      url: "https://adcpprojects.com/",
      img: a2cp.src,
      public: false,
      video: a2cpVideo 
    },
    {
      title: "Portfolio v1",
      description: "Proyecto de mi portfolio hecho con astro, tailwind y Vue.",
      technologies: [
        {
          name: "Astro",
          url: "https://astro.build/",
          img: astro.src,
        },
        {
          name: "Tailwind",
          url: "https://tailwindcss.com/",
          img: tailwind.src,
        },
        {
          name: "DaisyUI",
          url: "https://daisyui.com/",
          img: daisyui.src,
        },
        {
          name: "Vue3",
          url: "https://vuejs.org/",
          img: vue.src,
        },
      ],
      dateStart: "2024",
      dateEnd: "2024",
      workingAt: false,
      url: "#",
      img: portfolio.src,
      public: true,
      video: portfolioVideo 
    },
  ];