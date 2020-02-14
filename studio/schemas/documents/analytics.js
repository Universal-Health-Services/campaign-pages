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
        },
        {
            name: 'formAction',
            type: 'url',
            title: 'Form Action, URL',
            description: `url to pass form submissions <form action=" ~here~ "... >`
        }
    ],
    preview: {
        select: {
            tm: 'tmId',
            fa: 'formAction'
        },
        prepare({ tm, fa }) {
            return {
                title: tm,
                subtitle: fa
            }
        }
    }
}