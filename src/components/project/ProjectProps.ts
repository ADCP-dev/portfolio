interface Technology {
  name: string;
  url: string;
  img: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  technologies: Technology[];
  dateStart: string;
  dateEnd: string;
  workingAt: boolean;
  url: string;
  img: string;
  public: boolean;
  video: string;
}