export interface GalleryItem {
  image: string;
  title: string;
  category: GalleryCategory[]; 
  icon: string;
}

export type GalleryCategory = 
  | 'Todo' 
  | 'Cursos' 
  | 'Web' 
  | 'Redes Sociales' 
  | 'Videos' 
  | 'Proyectos';
