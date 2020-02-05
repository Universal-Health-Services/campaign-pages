export default {
    name: 'main',
    type: 'document',
    title: 'Landing Page Main Copy',
    description: `Main copy block, 1st below Hero. * Required`,
    fields: [
        {
            name: 'body',
            type: 'bodyPortableText',
            validation: Rule => Rule.error('You have to define a main copy block.').required()
        }
    ]
}