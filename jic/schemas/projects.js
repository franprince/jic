export default {
    name: 'projects',
    title: 'Proyectos',
    type: 'array',
    of: [{
        type: 'reference',
        to: [{type: 'project'}]
    }]
}