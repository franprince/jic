export default {
    name: 'project',
    type: 'document',
    title: 'Proyectos',
    fields: [
        {
        title: "Nombre del proyecto",
        name: "name",
        type: "text",
        rows: 2,
    },
    {
        title: "Subtítulo",
        name: "subtitle",
        description: "Este es el título que tendrá el proyecto en su propia sección",
        type: "text",
        rows: 2,
    },
    {
        title: "Color del playbutton",
        name: "playbuttonColor",
        type: "string"
    },
    {
        title: "Marca",
        name: "brand",
        type: "string",
    },
    {
        title: "Thumbnail",
        description: "Esta imagen va a aparecer hasta que el usuario haga click para iniciar el video",
        name: "thumbnail",
        type: "image",
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
        title: "Créditos",
        name: "credits",
        type: "text",
    },
        {
        title: "Imagen Principal",
        name: "img",
        type: "image"
    },
        {
        title: "Capturas",
        description: "Las 6 capturas que se van a mostrar en la página de cada proyecto",
        name: "screenshots",
        type: "array",
        of: [{type: "image"}]
    },
    ]
}