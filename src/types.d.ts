export interface Link {
  title: string;
  href: string;
  sublinks?: Link[];
}

export interface Project {
  name: string;
  img: string;
  href: string;
}
