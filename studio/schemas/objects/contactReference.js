export default {
    name: 'contactReference',
    type: 'object',
    title: 'Contact reference',
    fields: [
        {
            type: 'reference',
            name: 'contact',
            to: [
                {
                    type: 'contact'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'contact.name'
        }
    }
}