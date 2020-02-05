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
            name: 'main',
            title: 'Main Copy',
            type: 'main'
        },
        {
            title: 'Awards',
            name: 'awards',
            type: 'array',
            of: [{ type: 'award' }]
        }
    ],
    preview: {
        select: {
            title: 'owner.name',
            subtitle: 'serviceline.name',
            media: 'authorDetails.image'
        }
    }
}