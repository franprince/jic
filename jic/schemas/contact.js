export default {
  title: "Contacto",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Imagen del encabezado",
      name: "header",
      type: "image",
    },
    {
      title: "Presupuesto",
      name: "budget",
      type: "array",
      of: [{ type: "listValues" }],
    },
    {
      title: "Listado de servicios",
      name: "product",
      type: "array",
      of: [{ type: "listValues" }],
    },
  ],
};
