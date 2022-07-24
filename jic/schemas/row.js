export default {
  name: "row",
  title: "Row",
  type: "object",
  fields: [
    {
      name: "columns",
      title: "Columnas",
      description:
        "Las imágenes que cargues en esta fila van a mostrarse una al lado de la otra",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Texto alternativo",
              description:
                "Siempre debes proporcionar texto alternativo para los datos visuales si no hay otras anotaciones de texto.",
              type: "string",
              validation: (Rule) => Rule.required(),
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
