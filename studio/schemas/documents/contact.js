export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    description: `Location Name, Street Number & Name, Street optional, City Name, State, Zip, Phone, Email`,
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'street',
            type: 'string',
        },
        {
            name: 'street2',
            type: 'string',
            description: `optional`,
        },
        {
            name: 'city',
            type: 'string'
        },
        {
            name: 'state',
            type: 'string'
        },
        {
            name: 'zip',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'website',
            type: 'url'
        },
        {
            name: 'map',
            title: 'Map <iframe> Source',
            type: 'string',
            description: `Google 'Embed a map', <iframe src="=> this string <="></iframe>`
        }
    ]
}