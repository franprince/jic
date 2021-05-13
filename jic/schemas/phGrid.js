export default {
    title: "Grilla de fotos",
    name: "phGrid",
    type: "document",
    fields: [
      {
        title: "Foto",
        name: "pics",
        type: "array",
        of: [{type: "image"}]
      }
    ]
}