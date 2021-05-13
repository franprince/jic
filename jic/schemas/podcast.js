export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
        {
          title: "Imagen del encabezado",
          name: "header",
          type: "image"
        },
        {
          title: "Imagen del Podcast",
          name: "podcastImg",
          type: "image"
        },
        {
          title: "Fotos",
          name: "pics",
          type: "array",
          of: [{type: "image"}]
        }
      ]
}