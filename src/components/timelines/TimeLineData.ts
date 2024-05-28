import GESP_IA from '../../img/GESP_IA.jpeg';

interface links {
    icon: string|null,
    url: string,
    name: string
}

interface TimeLineProps {
    id: string,
    title: string;
    description: string;
    img?: string;
    url: string;
    links?: links,
}

export const TimeLineProps : TimeLineProps[] = [
    {
        id: "modal_IA",
        title: "Grado de especialidad de inteligencia artificial",
        description: "Para poder matricularse en este grado se necesita un grado superior de la familia de informática, se aprende sobre data science, big data, machine learning y inteligencia artificial.",
        img: GESP_IA.src,
        url: "https://paucasesnovescifp.cat/?page_id=4086",
    },
    {
        id: "modal_GS",
        title: "Grado Superior de desarrollo de aplicaciones web",
        description: "En este grado aprenderás a hacer aplicaciones desde el diseño hasta el backend e incluso el despliegue. Este curso da mucha importancia a bases de datos.",
        img: "https://paucasesnovescifp.cat/wp-content/uploads/2019/05/php-768x384.png",
        url: "https://paucasesnovescifp.cat/?page_id=1249",
    },
    {
        id: "modal_GM",
        title: "Grado Medio de microinformática y redes",
        description: "En este grado aprenderás a monitorizar y gestionar redes, mantenimiento, creación de infraestructuras, servicios en red, ciberseguridad y servicio técnico.",
        img: "https://paucasesnovescifp.cat/wp-content/uploads/2019/06/muntatge-768x384.jpg",
        url: "https://paucasesnovescifp.cat/?page_id=1783",
    },
    {
        id: "modal_HPcodewars_I",
        title: "I Competición HPcodewars IV edición",
        description: "Esta competición, realizada en 2020, Madrid, con concursantes de todas las comunidades autónomas, ha sido una de las primeras que he podido realizar a nivel de programación. Consistia en 4h de resolución de problemas con Python, esta prueba fue mi primer contacto con la programación. Aunque no estuve mucho en Madrid, me divertí mucho jugando con la gente ya que había una sección para jugar a videojuegos despues de la competición.",
        img: "https://hpscds.com/wp-content/uploads/2020/02/DSC_5432-scaled-e1582213094123.jpg",
        url: "https://hpscds.com/hp-codewars-madrid-2020/",
    },
    {
        id: "modal_HPcodewars_II",
        title: "I Competición HPcodewars V edición virtual",
        description: "Esta competición, realizada en 2021, en remoto, ya que fue en época de pandemia, con concursantes de todas las comunidades autónomas, asentaron mis conocimientos en resolución de problemas con python.",
        img: "https://hpscds.com/wp-content/uploads/2021/03/vg-code-wars-virtual-021.jpg",
        url: "https://hpscds.com/hp-codewars-spain-virtual-edition-2021/",
    },
]

