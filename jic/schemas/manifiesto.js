export default {
    name: 'manifiesto',
    title: 'Manifiesto',
    type: 'array',
    of: [{
        type: 'reference',
        to: [{type: 'frase'}]
    }]
}