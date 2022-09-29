export default {
  name: "personal",
  type: "document",
  title: "Proyectos personales",
  fields: [
    {
      title: "Nombre del proyecto",
      name: "name",
      type: "text",
      description: "Máximo 40 caracteres",
      rows: 2,
      validation: (Rule) =>
        Rule.required().max(40).error("Máximo de caracteres excedido"),
    },
    {
      title: "Subtítulo",
      name: "subtitle",
      description:
        "Este es el título que tendrá el proyecto en su propia sección",
      type: "text",
      rows: 2,
    },
    {
      title: "Marca",
      name: "brand",
      type: "string",
    },
    {
      title: "URL del video",
      name: "videoURL",
      type: "array",
      of: [{ type: "url" }],
    },
    {
      title: "Destacado",
      name: "featured",
      type: "boolean",
    },
    {
      title: "Oculto",
      name: "hidden",
      type: "boolean",
    },
    {
      title: "Slug",
      name: "slug",
      description: ".../slug-de-mi-proyecto",
      type: "slug",
      validation: (Rule) => Rule.required().error("El slug es requerido!"),
    },
    {
      title: "Categorías",
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("Ingresá por lo menos una categoría"),
    },
    {
      title: "El proyecto",
      name: "description",
      type: "text",
    },
    {
      title: "Más Capturas",
      description: "Nuevo componente de fotos",
      name: "rows",
      type: "array",
      of: [{ type: "row" }],
    },
    {
      title: "El proceso",
      name: "process",
      type: "text",
    },
    {
      title: "Fotos del proceso",
      description: "Capturas que van a aparecer en El Proceso",
      name: "processPics",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Créditos",
      name: "credits",
      type: "text",
    },
    {
      title: "El backstage",
      name: "backstage",
      type: "text",
    },
    {
      title: "Fotos del backstage",
      description: "Capturas que van a aparecer en El Backstage",
      name: "backstagePics",
      type: "array",
      of: [{ type: "row" }],
    },
    {
      title: "ID del video de backstage",
      name: "backstageVid",
      type: "string",
    },
    {
      title: "Imagen Principal",
      name: "img",
      type: "image",
    },
  ],
};
