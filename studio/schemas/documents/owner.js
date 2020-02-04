import contact from "./contact";

export default {
    name: 'owner',
    title: 'Owner',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: `Facility or System Name`
        },
        {
            title: 'Code',
            name: 'code',
            type: 'slug',
            description: `Facility or System Code, initals`
        },
        {
            title: 'Contact',
            name: 'contact',
            type: 'array',
            of: [{
                weak: true,
                type: 'reference',
                to: {
                    type: 'contact'
                }
            }]
        },
        {
            name: 'logo',
            title: 'Logo',
            description: `This will be the campaign page's logo in the header.`,
            type: 'mainImage'
        }
    ]
}