export default {
    name: 'personalProjects',
    title: 'Personal',
    type: 'array',
    of: [{
        type: 'reference',
        to: [{type: 'personal'}]
    }]
}
