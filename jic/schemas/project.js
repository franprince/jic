export default {
    name: 'project',
    type: 'document',
    title: 'Proyectos',
    fields: [
        {
        title: "Nombre del proyecto",
        name: "name",
        type: "text",
        description: "Máximo 40 caracteres",
        rows: 2,
        validation: Rule => [
            Rule.max(40).error('Máximo de caracteres excedido')
        ]
    },
    {
        title: "Subtítulo",
        name: "subtitle",
        description: "Este es el título que tendrá el proyecto en su propia sección",
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
        type: "url",
    },
    {
        title: "Destacado",
        name: "featured",
        type: "boolean"
    },
    {
        title: "Slug",
        name: "slug",
        description: ".../slug-de-mi-proyecto",
        type: "slug",
    },
        {
        title: "Categorías",
        name: "categories",
        type: "array", 
        of: [{type: "string"}]
    },
    {
        title: "El proyecto",
        name: "description",
        type: "text", 
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
        of: [{type: "image"}]
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
        of: [{type: "image"}]
    },
    {
        title: "ID del video de backstage",
        name: "backstageVid",
        type: "string",
    },
        {
        title: "Imagen Principal",
        name: "img",
        type: "image"
    },
    {
        title: "Capturas",
        description: "Las capturas que van a aparecer en El Proceso",
        name: "screenshots",
        type: "array",
        of: [{type: "image"}]
    },
    ]
}