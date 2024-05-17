interface carrouselImages {
    name: string,
    url: string,
    link: string|null
}

interface links {
    icon: string|null,
    url: string,
    name: string
}

interface TimeLineProps {
    id: string,
    title: string;
    description: string;
    images: carrouselImages[];
    links: links,
    dateStart: string;
    dateEnd: string;
}

export const TimeLineProps : TimeLineProps[] = [
    {
        id: "modal_IA",
        title: "Grado de especialidad de inteligencia artificial",
        description: "Para poder entrar en este grado se necesita el GS, se aprende sobre data science, big data, machine learning y la inteligencia artificial.",
        images: [
            {
                name: "IA",
                url: "https://www.ia.unizar.es/",
                link: "https://www.ia.unizar.es/"
            }
        ],
        links: {
            icon: null,
            url: "https://www.ia.unizar.es/",
            name: "IA"
        },
        dateEnd: "2022",
        dateStart: "2020"
    }
]

