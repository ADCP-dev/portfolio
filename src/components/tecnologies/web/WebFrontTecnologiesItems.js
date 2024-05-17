import vue from '../../../img/tecnologies/web/vue.png';
import react from '../../../img/tecnologies/web/react.svg';
import tailwind from '../../../img/tecnologies/web/tailwind.webp';
import vitejs from '../../../img/tecnologies/web/vitejs.svg';
import astro from "../../../img/tecnologies/web/astro.png";
import primevue from "../../../img/tecnologies/web/primevue.png";
import pinia from "../../../img/tecnologies/web/pinia.svg";



export default [
  { name: 'Vue 3', img: vue.src, favourite: true, experience: "+1y", url: "https://vuejs.org" },
  { name: 'React', img: react.src, url: "https://reactjs.org" },
  { name: 'Tailwind', img: tailwind.src, url: "https://tailwindcss.com" },
  { name: 'ViteJs', img: vitejs.src, url: "https://vitejs.dev" },
  {
    name: "Astro",
    url: "https://astro.build/",
    img: astro.src,
  },
  {
    name: "PrimeVue",
    url: "https://primevue.org/",
    img: primevue.src,
  },
  {
    name: "Pinia",
    url: "https://pinia.vuejs.org/",
    img: pinia.src,
  },
]