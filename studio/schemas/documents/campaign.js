export default {
    name: 'campaign',
    title: 'Campaign',
    type: 'document',
    fields: [
        {
            title: 'Owner',
            name: 'owner',
            type: 'document',
            description: `The Campaign's parent facility or System.`,
            type: 'reference',
            to: {
                type: 'owner'
            }
        },
        {
            title: 'Service Line',
            name: 'serviceline',
            type: 'reference',
            to: {
                type: 'service'
            }
        },
        {
            name: 'analytics',
            title: 'Analytics',
            type: 'analytics'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: `A campaign description for <html> <head> <title>`
        },
        {
            name: 'tel',
            title: 'Telephone Number',
            type: 'string',
            description: `Campaign telephone number, tracked`
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'hero'
        },
        {
            name: 'main',
            title: 'Main Copy',
            type: 'main'
        },
        {
            title: 'Teasers',
            name: 'teasers',
            type: 'array',
            of: [{ weak: true, type: 'teaser' }]
        },
        {
            title: 'Awards',
            name: 'awards',
            type: 'array',
            of: [{ weak: true, type: 'award' }]
        },
        {
            name: 'map',
            title: 'Map <iframe> Source',
            type: 'string',
            description: `Google 'Embed a map', <iframe src="=> this string <="></iframe>`
        },
        {
            title: 'Locations',
            name: 'locations',
            type: 'array',
            of: [{
                weak: true,
                type: 'reference',
                to: {
                    type: 'location'
                }
            }]
        },
    ],
    preview: {
        select: {
            title: 'owner.name',
            subtitle: 'serviceline.name',
            media: 'authorDetails.image'
        }
    }
}