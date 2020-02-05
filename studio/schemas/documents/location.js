export default {
    name: 'location',
    title: 'Location',
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
            name: 'link',
            type: 'url'
        }
    ]
}