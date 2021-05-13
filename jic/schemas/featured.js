export default {
    name: 'feautred',
    title: 'Destacados',
    type: 'array',
    of: [{
        type: 'reference',
        to: [{type: 'project'}]
    }]
}