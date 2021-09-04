export default {
    name: 'frase',
    type: 'document',
    title: 'Manifiesto',
    fields: [
        {
        title: "Título",
        name: "title",
        type: "text",
        rows: 2,
        description: "Máximo 50 caracteres",
        validation: Rule => [
            Rule.required().min(1).error('Campo requerido'),
            Rule.max(50).error('Máximo de caracteres excedido')
        ]
    },
    {
        title: "Frase",
        name: "phrase",
        type: "text",
        description: "Máximo 180 caracteres",
        validation: Rule => [
            Rule.required().min(1).error('Campo requerido'),
            Rule.max(180).error('Máximo de caracteres excedido')
        ]
    },
    {
        title: "Frase Mobile",
        name: "phraseMobile",
        type: "text",
        description: "Máximo 180 caracteres",
        validation: Rule => [
            Rule.required().min(1).error('Campo requerido'),
            Rule.max(180).error('Máximo de caracteres excedido')
        ]
    },
    {
        title: "Orden",
        name: "order",
        type: "number",
        validation: Rule => [
            Rule.required().min(1).error('Campo requerido')
        ]
    }
    ]
}