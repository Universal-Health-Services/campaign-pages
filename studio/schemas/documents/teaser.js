export default {
    name: 'teaser',
    title: 'Teaser',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            description: `Teaser Image`,
            type: 'mainImage'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: `Teaser Title`,
            validation: Rule => Rule.error('You have to define a title.').required()
        },
        {
            name: 'body',
            type: 'bodyPortableText',
            validation: Rule => Rule.error('You have to define a copy block.').required()
        },
        {
            name: 'terms',
            type: 'array',
            of: [{
                type: 'string',
                options: {
                    layout: 'tags'
                }
            }]
        }
    ]
}