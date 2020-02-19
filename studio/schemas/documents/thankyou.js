export default {
    name: 'thankyou',
    type: 'document',
    title: 'Thank You Message',
    description: `Thank you message on succesful form submission.`,
    fields: [
        {
            name: 'body',
            type: 'bodyPortableText'
        }
    ],
    preview: {
        select: {
            body: 'body'
        },
        prepare({ title='Thank You Message' }) {
            return {
                title
            }
        }
    }
}