export default {
    title: "YouTube",
    name: "youtube",
    type: "document",
    fields: [
      {
        title: "Imagen del encabezado",
        name: "header",
        type: "image"
      },
      {
        title: "ID de los videos",
        name: "ids",
        type: "array",
        of: [{type: "string"}]
      },
      {
        title: "Imagen Parallax",
        name: "parallaxImg",
        type: "image",
      },
      {
        title: "Imagen personal",
        name: "personalImg",
        type: "image"
      }
    ]
  }