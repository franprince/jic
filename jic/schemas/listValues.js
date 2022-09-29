export default {
  title: "Valores de Lista",
  name: "listValues",
  type: "object",
  fields: [
    {
      type: "string",
      name: "displayValue",
      title: "Valor visible",
      description: "Este es el valor que ve el usuario",
    },
    {
      type: "string",
      name: "value",
      title: "Valor",
      description: "Este es el valor que llega en el mail",
    },
  ],
};
