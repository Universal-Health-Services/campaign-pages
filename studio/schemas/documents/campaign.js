export default {
    name: 'campaign',
    title: 'Campaign',
    type: 'document',
    fields: [
        {
            name: 'owner',
            title: 'Owner',
            type: 'document',
            description: `The Campaign's parent facility or System.`,
            type: 'reference',
            to: {
                type: 'owner'
            }
        },
        {
            name: 'serviceline',
            title: 'Service Line',
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
            name: 'teasers',
            title: 'Teasers',
            type: 'array',
            of: [{ weak: true, type: 'teaser' }]
        },
        {
            name: 'awards',
            title: 'Awards',
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
            name: 'locations',
            title: 'Locations',
            type: 'array',
            of: [{
                weak: true,
                type: 'reference',
                to: {
                    type: 'location'
                }
            }]
        },
        {
            name: 'thankyou',
            title: 'Thank You',
            type: 'thankyou'
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