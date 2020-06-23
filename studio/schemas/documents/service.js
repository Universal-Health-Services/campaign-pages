export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Code',
            name: 'code',
            type: 'slug',
            description: `initals or short form name`
        },
        {
            title: 'Tag Line',
            name: 'tagline',
            type: 'string',
        }
    ]
}