export default {
    name: 'hero',
    title: 'Landing Page Hero',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            options: {
                maxLength: 96
            }
        },
        {
            name: 'subtitle',
            title: `Subtitle, This text will follow the title in the Hero`,
            type: 'string',
            options: {
                maxLength: 140
            }
        },
        {
            name: 'heroImage',
            title: `This image will be the campaign hero background image.`,
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            st: 'title'
        },
        prepare({ title='Landing Page Hero', st }) {
            return {
                title,
                subtitle: st
            }
        }
    }
}