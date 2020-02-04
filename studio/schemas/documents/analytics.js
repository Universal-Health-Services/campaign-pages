export default {
    name: 'analytics',
    title: 'Analytics',
    type: 'document',
    fields: [
        {
            name: 'tmId',
            type: 'string',
            title: 'Tag Manager Unique ID',
            description: `Google's "Tag Manager" Unique Identifier.`,
            options: {
                maxLength: 20
            }
        }
    ],
    preview: {
        select: {
            tm: 'tmId'
        },
        prepare({ title='Tag Manager Information', tm }) {
            return {
                title,
                subtitle: tm
            }
        }
    }
}