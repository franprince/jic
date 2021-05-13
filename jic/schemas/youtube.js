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
        title: "URL de los videos",
        name: "urls",
        type: "array",
        of: [{type: "url"}]
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