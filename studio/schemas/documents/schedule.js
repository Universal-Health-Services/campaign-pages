import { format } from 'date-fns'
export default {
    name: 'schedule',
    title: 'Scheduled Campaign Date Range',
    description: 'The start and end dates for this campaign.',
    type: 'document',
    fields: [
        {
            name: 'startDate',
            type: 'datetime',
            title: 'Start Date',
            description: 'Schedule when this campaign starts.'
        },
        {
            name: 'endDate',
            type: 'datetime',
            title: 'End Date',
            description: 'Schedule when this campaign ends.'
        }
    ],
    preview: {
        select: {
            startAt: 'startDate',
            endAt: 'endDate',
        },
        prepare({ title='Schedule', startAt, endAt }) {
            const start=format(startAt, 'YYYY/MM')
            const end=format(endAt, 'YYYY/MM')
            return {
                title,
                subtitle: start+` - `+end
            }
        }
    }
}