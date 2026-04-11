export interface Category {
  id: string;
  name: string;
  icon: string;
  order: number;
}

export const categories: Category[] = [
  { id: "layout", name: "Layout", icon: "layout", order: 1 },
  { id: "typography", name: "Typography", icon: "type", order: 2 },
  { id: "colors", name: "Colors & Effects", icon: "palette", order: 3 },
  { id: "animations", name: "Animations", icon: "zap", order: 4 },
  { id: "responsive", name: "Responsive", icon: "smartphone", order: 5 },
  { id: "html", name: "HTML & Media", icon: "code", order: 6 },
];
