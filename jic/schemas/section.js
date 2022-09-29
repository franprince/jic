export default {
  name: "section",
  type: "document",
  title: "Secciones del home",
  fields: [
    {
      title: "Nombre de la sección",
      name: "name",
      type: "string",
    },
    {
      title: "Ocultar sección",
      name: "hidden",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Título",
      name: "title",
      type: "string",
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
      title: "Texto del botón",
      name: "buttonText",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      description: "Esta es la URL a dónde va a redirigir el botón",
      type: "string",
    },
    {
      title: "Posición del contenido",
      name: "contentPosition",
      type: "string",
      options: {
        list: [
          { title: "Izquierda", value: "leftPosition" },
          { title: "Centrado", value: "centerPosition" },
          { title: "Derecha", value: "rightPosition" },
        ],
      },
      initialValue: "centerPosition",
    },
    {
      title: "Mostrar contenido",
      description:
        "Sirve para mostrar u ocultar el título, el subtítulo y el botón",
      name: "showContent",
      type: "boolean",
    },
    {
      title: "Color de fondo de la sección",
      name: "backgroundColor",
      description:
        "Esta opción se usa para cambiar el color del logo al pasar sobre la sección. Ej: Si se elije la opción 'Claro', el logo se cambia a negro al pasar sobre la sección.",
      type: "string",
      options: {
        list: [
          { title: "Claro", value: "white" },
          { title: "Oscuro", value: "black" },
        ],
      },
      initialValue: "white",
    },
    {
      title: "Parallax",
      name: "parallax",
      type: "boolean",
    },
    {
      title: "Fondo",
      description: "Este es el fondo que va a tener la sección",
      name: "backgrounds",
      type: "document",
      fields: [
        {
          title: "Fondo desktop",
          name: "desktop_bg",
          type: "image",
          options: {
            metadata: [],
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Fondo mobile",
          name: "mobile_bg",
          type: "image",
          options: {
            metadata: [],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
